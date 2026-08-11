import { adminDb } from "@/lib/firebase-admin";

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export async function getAllMessages(): Promise<Message[]> {
  const snapshot = await adminDb
    .collection("messages")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: data.createdAt?.toDate?.()?.toISOString() ?? "",
    };
  });
}

export async function createMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const docRef = await adminDb.collection("messages").add({
    ...data,
    createdAt: new Date(),
  });

  return {
    id: docRef.id,
  };
}

export async function deleteMessage(id: string) {
  await adminDb
    .collection("messages")
    .doc(id)
    .delete();

  return {
    success: true,
  };
}