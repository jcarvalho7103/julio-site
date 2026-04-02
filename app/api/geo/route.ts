export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "http://ip-api.com/json/?fields=status,query,city,regionName,country,timezone,lat,lon",
      { next: { revalidate: 0 } }
    );
    if (!res.ok) return NextResponse.json({});
    const data = await res.json();
    if (data.status !== "success") return NextResponse.json({});
    return NextResponse.json({
      ip: data.query,
      city: data.city,
      region: data.regionName,
      country: data.country,
      timezone: data.timezone,
      latitude: data.lat,
      longitude: data.lon,
    });
  } catch {
    return NextResponse.json({});
  }
}
