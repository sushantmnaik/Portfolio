import { NextResponse } from "next/server";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function GET() {
  try {
    const docRef = await addDoc(
      collection(db, "test"),
      {
        message: "Firebase is working!",
        createdAt: serverTimestamp(),
      }
    );

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.error("Firebase error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}