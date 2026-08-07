import { siteConfig } from "@/lib/config";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const links = Object.entries(siteConfig.social).filter(([, url]) => !!url);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-teal">©</span> {year} {siteConfig.name}
        </p>
        {links.length > 0 && (
          <div className="flex gap-4">
            {links.map(([label, url]) => (
              <a
                key={label}
                href={url}
                className="hover:text-paper transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
