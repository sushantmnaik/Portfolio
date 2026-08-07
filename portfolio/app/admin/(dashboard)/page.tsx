import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { deleteProjectAction } from "@/lib/actions";

export default function AdminDashboardPage() {
  const projects = getAllProjects();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-paper">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-md bg-amber px-4 py-2 font-mono text-sm font-medium text-ink hover:opacity-90"
        >
          + new project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="mt-8 font-mono text-sm text-muted">
          No projects yet. Add your first one above.
        </p>
      ) : (
        <div className="mt-6 divide-y divide-border border border-border rounded-lg">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-paper">
                  {project.title}
                  {project.featured === 1 && (
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-amber">
                      featured
                    </span>
                  )}
                </p>
                <p className="truncate font-mono text-xs text-muted">
                  {project.tags}
                </p>
              </div>
              <div className="flex shrink-0 gap-3 font-mono text-sm">
                <Link
                  href={`/admin/projects/${project.id}/edit`}
                  className="text-teal hover:underline"
                >
                  edit
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deleteProjectAction(project.id);
                  }}
                >
                  <button type="submit" className="text-rose hover:underline">
                    delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
