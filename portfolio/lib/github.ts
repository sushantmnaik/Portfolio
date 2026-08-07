// Fetches a repo's creation/last-push dates from the GitHub API.
// Results are cached for an hour (Next.js fetch cache) so we don't hit
// GitHub's rate limit on every page load, and we fail gracefully if the
// API is unreachable or rate-limited - the site just falls back to the
// manually-set date for that project instead of breaking.

type GithubRepoDates = {
  createdAt: string;
  pushedAt: string;
} | null;

export async function getRepoDates(repo: string): Promise<GithubRepoDates> {
  const trimmed = repo.trim();
  if (!trimmed || !trimmed.includes("/")) return null;

  try {
    const res = await fetch(`https://api.github.com/repos/${trimmed}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.created_at || !data.pushed_at) return null;

    return { createdAt: data.created_at, pushedAt: data.pushed_at };
  } catch {
    // Network error, rate limit, offline dev, etc. - fall back quietly.
    return null;
  }
}
