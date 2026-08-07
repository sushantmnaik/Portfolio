import db from "@/lib/db";

export type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export function getAllMessages(): Message[] {
  return db
    .prepare("SELECT * FROM messages ORDER BY createdAt DESC")
    .all() as Message[];
}

export function createMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  return db
    .prepare(
      "INSERT INTO messages (name, email, message) VALUES (@name, @email, @message)"
    )
    .run(data);
}

export function deleteMessage(id: number) {
  return db.prepare("DELETE FROM messages WHERE id = ?").run(id);
}
