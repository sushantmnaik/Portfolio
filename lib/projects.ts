import db from "@/lib/db";

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  projectUrl: string | null;
  tags: string;
  featured: number;
  sortOrder: number;
  createdAt: string;
};

export function getAllProjects(): Project[] {
  return db
    .prepare("SELECT * FROM projects ORDER BY sortOrder ASC, createdAt DESC")
    .all() as Project[];
}

export function getFeaturedProjects(): Project[] {
  return db
    .prepare(
      "SELECT * FROM projects WHERE featured = 1 ORDER BY sortOrder ASC, createdAt DESC"
    )
    .all() as Project[];
}

export function getProjectById(id: number): Project | undefined {
  return db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as
    | Project
    | undefined;
}

export function createProject(data: {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string;
  featured: boolean;
  sortOrder: number;
}) {
  return db
    .prepare(
      `INSERT INTO projects (title, description, imageUrl, projectUrl, tags, featured, sortOrder)
       VALUES (@title, @description, @imageUrl, @projectUrl, @tags, @featured, @sortOrder)`
    )
    .run({ ...data, featured: data.featured ? 1 : 0 });
}

export function updateProject(
  id: number,
  data: {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    tags: string;
    featured: boolean;
    sortOrder: number;
  }
) {
  return db
    .prepare(
      `UPDATE projects
       SET title = @title, description = @description, imageUrl = @imageUrl,
           projectUrl = @projectUrl, tags = @tags, featured = @featured, sortOrder = @sortOrder
       WHERE id = @id`
    )
    .run({ ...data, featured: data.featured ? 1 : 0, id });
}

export function deleteProject(id: number) {
  return db.prepare("DELETE FROM projects WHERE id = ?").run(id);
}
