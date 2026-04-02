export interface GeoData {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  source: "ip" | "gps" | "ip+gps";
}

// Busca localização por IP via rota interna (server-side proxy, sem mixed-content)
async function getGeoByIP(): Promise<Partial<GeoData>> {
  try {
    const res = await fetch("/api/geo", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

// Busca coordenadas via GPS do browser (requer permissão)
function getGeoByBrowser(): Promise<{ latitude: number; longitude: number; accuracy: number } | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      () => resolve(null),
      { timeout: 5000, maximumAge: 60000 }
    );
  });
}

// Combina IP + GPS: IP como base, GPS sobrescreve lat/lng se disponível
export async function getGeoData(): Promise<GeoData> {
  const [ipGeo, gpsGeo] = await Promise.all([getGeoByIP(), getGeoByBrowser()]);

  if (gpsGeo) {
    return {
      ...ipGeo,
      latitude: gpsGeo.latitude,
      longitude: gpsGeo.longitude,
      accuracy: gpsGeo.accuracy,
      source: Object.keys(ipGeo).length > 0 ? "ip+gps" : "gps",
    };
  }

  return {
    ...ipGeo,
    source: "ip",
  };
}
