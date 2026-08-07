import Link from "next/link";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-sm text-paper hover:text-amber transition-colors"
        >
          <span className="text-muted">~/</span>
          {siteConfig.name.toLowerCase().replace(/\s+/g, "-")}
        </Link>
        <nav className="flex gap-6 font-mono text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
