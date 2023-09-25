import { ANIME } from "@consumet/extensions";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const gogoanime = new ANIME.Gogoanime();
    const data = await gogoanime.fetchTopAiring()
    return NextResponse.json(data)
}