import type { Project } from "@/lib/projects";
import { getRepoDates } from "@/lib/github";

// Assigns version numbers as if each project were a release, oldest = v1.0.0,
// and returns them newest-first (like a real changelog).
//
// If a project has a linked GitHub repo, its date comes from GitHub itself
// (last push date) instead of the manually-set createdAt in the database.
export async function withVersions(
  projects: Project[]
): Promise<{ project: Project; version: string; date: string }[]> {
  const withResolvedDates = await Promise.all(
    projects.map(async (project) => {
      const repoDates = project.repo ? await getRepoDates(project.repo) : null;
      const date = repoDates?.pushedAt ?? project.createdAt;
      return { project, date };
    })
  );

  const oldestFirst = [...withResolvedDates].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const versioned = oldestFirst.map((entry, index) => ({
    project: entry.project,
    date: entry.date,
    version: `v1.${index}.0`,
  }));

  return versioned.reverse();
}
