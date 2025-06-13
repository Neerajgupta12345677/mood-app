import { NextRequest, NextResponse } from "next/server";
import { moods } from "@/utils/moods";

export async function GET() {
  return NextResponse.json(moods);
}

export async function POST(req: NextRequest) {
  const { mood, comment } = await req.json();
  moods.push({ mood, comment, time: new Date().toISOString() });
  return NextResponse.json({ success: true });
}
