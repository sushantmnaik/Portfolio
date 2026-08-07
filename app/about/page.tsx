import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="font-mono text-sm text-teal">
        <span className="text-muted">$</span> cat about.md
      </div>
      <h1 className="mt-3 text-3xl font-bold text-paper">About</h1>

      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        {siteConfig.bio.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-6 font-mono text-sm text-muted">
        {siteConfig.location}
      </p>

      <div className="mt-12">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted">
          # stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {siteConfig.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-sm text-paper"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted">
          # education
        </h2>
        <div className="mt-4 space-y-4">
          {siteConfig.education.map((entry) => (
            <div
              key={entry.title}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium text-paper">{entry.title}</h3>
                <span className="font-mono text-xs text-muted">
                  {entry.date}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-amber">
                {entry.score}
              </p>
              <p className="mt-1 text-sm text-muted">{entry.institution}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
