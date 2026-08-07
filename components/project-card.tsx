import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  version,
}: {
  project: Project;
  version: string;
}) {
  const tags = project.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <article className="group relative border border-border bg-surface rounded-lg p-6 transition-colors hover:border-teal/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-teal">{version}</span>
          {project.featured === 1 && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber border border-amber/40 rounded-full px-2 py-0.5">
              latest
            </span>
          )}
        </div>
        <time className="font-mono text-xs text-muted shrink-0">
          {new Date(project.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </time>
      </div>

      <h3 className="mt-3 text-xl font-semibold text-paper">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs text-teal before:content-['--'] before:text-muted before:mr-0.5"
            >
              {tag.toLowerCase().replace(/\s+/g, "-")}
            </li>
          ))}
        </ul>
      )}

      {project.projectUrl && (
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-amber hover:underline"
        >
          view project <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}
