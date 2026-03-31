import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKEN = process.env.APIFY_TOKEN || "";

const clients = [
  { name: "Afya",                username: "afya.oficial" },
  { name: "Maíra Cardi",         username: "mairacardi" },
  { name: "Carolina Caribé",     username: "carolinacaribeoficial" },
  { name: "Anthony Miranda",     username: "anthonymirandaoficial" },
  { name: "André Froede",        username: "andrefroedoficial" },
  { name: "Edwards Miranda",     username: "euedwardsmiranda" },
  { name: "Keila Neves",         username: "keilaneves91" },
  { name: "JR das Neves",        username: "jrdasneves" },
  { name: "Dra. Elisiane",       username: "doutoraelisiane" },
  { name: "Coloplast",           username: "coloplastwoundcare" },
  { name: "Rev3 Incorporadora",  username: "rev3incorporadora" },
  { name: "Mamute Inc",          username: "mamuteinc" },
  { name: "Finanças Dominadas",  username: "financas.dominadas" },
  { name: "Meu Consultório",     username: "meu.consultorio.particular" },
  { name: "Elainne Ourives",     username: "elainneourivesoficial" },
  { name: "Mentoria Residência", username: "mentoria.residencia" },
];

const outDir = join(__dirname, "../public/clients");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = await res.arrayBuffer();
  writeFileSync(dest, Buffer.from(buf));
}

async function runActor(usernames) {
  console.log("Iniciando actor Apify com", usernames.length, "perfis...");
  const res = await fetch(
    `https://api.apify.com/v2/acts/apify~instagram-profile-scraper/runs?token=${TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames }),
    }
  );
  const data = await res.json();
  if (!res.ok || !data?.data?.id) {
    console.error("Erro ao iniciar actor:", JSON.stringify(data, null, 2));
    process.exit(1);
  }
  return data.data.id;
}

async function waitForRun(runId, maxWait = 300_000) {
  const start = Date.now();
  console.log(`Run iniciado: ${runId}. Aguardando conclusão...`);
  while (Date.now() - start < maxWait) {
    await new Promise((r) => setTimeout(r, 5000));
    const res = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${TOKEN}`
    );
    const data = await res.json();
    const status = data?.data?.status;
    process.stdout.write(`\r  Status: ${status}    `);
    if (status === "SUCCEEDED") { console.log(""); return data.data.defaultDatasetId; }
    if (["FAILED", "ABORTED", "TIMED-OUT"].includes(status)) {
      console.error("\nRun falhou:", status);
      process.exit(1);
    }
  }
  console.error("\nTimeout aguardando o run.");
  process.exit(1);
}

async function getResults(datasetId) {
  const res = await fetch(
    `https://api.apify.com/v2/datasets/${datasetId}/items?token=${TOKEN}&clean=true`
  );
  return res.json();
}

async function main() {
  const usernames = clients.map((c) => c.username);
  const runId = await runActor(usernames);
  const datasetId = await waitForRun(runId);
  const items = await getResults(datasetId);

  console.log(`\nResultados recebidos: ${items.length} perfis`);

  const mapping = {};
  for (const item of items) {
    const username = (item.username || item.inputUrl || "").replace(/.*instagram\.com\//, "").replace(/\/$/, "");
    const picUrl = item.profilePicUrlHD || item.profilePicUrl || item.profile_pic_url_hd || item.profile_pic_url;
    if (username && picUrl) mapping[username.toLowerCase()] = picUrl;
  }

  const result = [];

  for (const client of clients) {
    const key = client.username.toLowerCase();
    const picUrl = mapping[key];
    if (!picUrl) {
      console.warn(`  [SKIP] ${client.name} — foto não encontrada`);
      result.push({ ...client, photo: null });
      continue;
    }
    const filename = `${client.username}.jpg`;
    const dest = join(outDir, filename);
    try {
      await downloadImage(picUrl, dest);
      console.log(`  [OK]   ${client.name} → /clients/${filename}`);
      result.push({ ...client, photo: `/clients/${filename}` });
    } catch (e) {
      console.warn(`  [FAIL] ${client.name}: ${e.message}`);
      result.push({ ...client, photo: null });
    }
  }

  // Write JSON manifest for the component to consume
  const manifestPath = join(__dirname, "../public/clients/manifest.json");
  writeFileSync(manifestPath, JSON.stringify(result, null, 2));
  console.log("\nManifesto salvo em public/clients/manifest.json");

  // Print summary
  const ok = result.filter((r) => r.photo).length;
  console.log(`\nConcluído: ${ok}/${clients.length} fotos baixadas.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
