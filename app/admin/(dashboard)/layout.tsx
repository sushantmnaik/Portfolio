import Link from "next/link";
import { logoutAction } from "@/lib/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
        <nav className="flex gap-5 font-mono text-sm">
          <Link href="/admin" className="text-paper hover:text-amber">
            dashboard
          </Link>
          <Link href="/admin/messages" className="text-muted hover:text-paper">
            messages
          </Link>
          <Link href="/" className="text-muted hover:text-paper">
            view site
          </Link>
        </nav>
        <form action={logoutAction}>
          <button
            type="submit"
            className="font-mono text-sm text-muted hover:text-rose"
          >
            log out
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
