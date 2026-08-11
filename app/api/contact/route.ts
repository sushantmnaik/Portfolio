import { NextRequest, NextResponse } from "next/server";
import { createMessage } from "@/lib/messages";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email address." },
      { status: 400 }
    );
  }

  await createMessage({ name, email, message });

  return NextResponse.json({ ok: true });
}