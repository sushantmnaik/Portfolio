import { getAllMessages } from "@/lib/messages";
import { deleteMessageAction } from "@/lib/actions";

export default function AdminMessagesPage() {
  const messages = getAllMessages();

  return (
    <div>
      <h1 className="text-2xl font-bold text-paper">Messages</h1>
      <p className="mt-2 font-mono text-sm text-muted">
        Submissions from your contact form.
      </p>

      {messages.length === 0 ? (
        <p className="mt-8 font-mono text-sm text-muted">No messages yet.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-paper">{msg.name}</p>
                  <a
                    href={`mailto:${msg.email}`}
                    className="font-mono text-xs text-teal hover:underline"
                  >
                    {msg.email}
                  </a>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <time className="font-mono text-xs text-muted">
                    {new Date(msg.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <form
                    action={async () => {
                      "use server";
                      await deleteMessageAction(msg.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="font-mono text-xs text-rose hover:underline"
                    >
                      delete
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-muted">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
