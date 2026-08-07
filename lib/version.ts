import type { Project } from "@/lib/projects";

// Assigns version numbers as if each project were a release, oldest = v1.0.0,
// and returns them newest-first (like a real changelog).
export function withVersions(
  projects: Project[]
): { project: Project; version: string }[] {
  const oldestFirst = [...projects].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const versioned = oldestFirst.map((project, index) => ({
    project,
    version: `v1.${index}.0`,
  }));

  return versioned.reverse();
}
