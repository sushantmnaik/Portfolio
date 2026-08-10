import type { Project } from "@/lib/projects";

export default function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void;
  project?: Project;
}) {
  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          title
        </label>
        <input
          name="title"
          required
          defaultValue={project?.title}
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          description
        </label>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={project?.description}
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          image url (optional)
        </label>
        <input
          name="imageUrl"
          defaultValue={project?.imageUrl ?? ""}
          placeholder="https://…"
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          project url (optional)
        </label>
        <input
          name="projectUrl"
          defaultValue={project?.projectUrl ?? ""}
          placeholder="https://…"
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          tags (comma-separated)
        </label>
        <input
          name="tags"
          defaultValue={project?.tags ?? ""}
          placeholder="Next.js, TypeScript, Tailwind"
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          github repo (owner/name, optional)
        </label>
        <input
          name="repo"
          defaultValue={project?.repo ?? ""}
          placeholder="sushantmnaik/Waideek-Playground"
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
        <p className="mt-1 font-mono text-[11px] text-muted">
          if set, the version date shown on the site is pulled live from this repo&apos;s last GitHub push
        </p>
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-wider text-muted">
          sort order (lower = appears first)
        </label>
        <input
          name="sortOrder"
          type="number"
          defaultValue={project?.sortOrder ?? 0}
          className="mt-2 w-32 rounded-md border border-border bg-surface px-3 py-2 text-paper outline-none focus:border-teal"
        />
      </div>

      <label className="flex items-center gap-2 font-mono text-sm text-paper">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={project?.featured === 1}
          className="h-4 w-4 accent-amber"
        />
        show on homepage as featured
      </label>

      <button
        type="submit"
        className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink hover:opacity-90"
      >
        {project ? "save changes" : "create project"}
      </button>
    </form>
  );
}
