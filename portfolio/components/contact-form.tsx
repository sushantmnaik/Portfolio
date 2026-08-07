"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-teal/40 bg-teal/10 px-4 py-3 font-mono text-sm text-teal">
        message sent — I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-xs uppercase tracking-wider text-muted"
        >
          name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block font-mono text-xs uppercase tracking-wider text-muted"
        >
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-wider text-muted"
        >
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-sm text-rose">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "sending…" : "send message"}
      </button>
    </form>
  );
}
