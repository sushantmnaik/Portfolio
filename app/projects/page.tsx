import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { withVersions } from "@/lib/version";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = getAllProjects();
  const versioned = withVersions(projects);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="font-mono text-sm text-teal">
        <span className="text-muted">$</span> cat CHANGELOG.md
      </div>
      <h1 className="mt-3 text-3xl font-bold text-paper">Projects</h1>
      <p className="mt-3 max-w-xl text-muted">
        Everything I&apos;ve shipped, newest first — laid out like a release
        log.
      </p>

      {versioned.length === 0 ? (
        <p className="mt-12 font-mono text-sm text-muted">
          No projects yet. Log into{" "}
          <a href="/admin" className="text-teal hover:underline">
            /admin
          </a>{" "}
          to add your first one.
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {versioned.map(({ project, version }) => (
            <ProjectCard key={project.id} project={project} version={version} />
          ))}
        </div>
      )}
    </div>
  );
}
