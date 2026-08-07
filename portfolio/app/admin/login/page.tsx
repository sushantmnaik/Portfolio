"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Incorrect email or password.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-6">
      <div className="font-mono text-sm text-teal">
        <span className="text-muted">$</span> sudo login
      </div>
      <h1 className="mt-3 text-2xl font-bold text-paper">Admin login</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
            autoFocus
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block font-mono text-xs uppercase tracking-wider text-muted"
          >
            password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
          />
        </div>

        {error && <p className="font-mono text-sm text-rose">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "logging in…" : "log in"}
        </button>
      </form>
    </div>
  );
}
