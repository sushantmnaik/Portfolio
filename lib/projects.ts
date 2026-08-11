import { adminDb } from "@/lib/firebase-admin";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  projectUrl: string | null;
  tags: string;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  repo: string;
};

function formatProject(
  id: string,
  data: FirebaseFirestore.DocumentData
): Project {
  return {
    id,
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl ?? null,
    projectUrl: data.projectUrl ?? null,
    tags: data.tags ?? "",
    featured: Boolean(data.featured),
    sortOrder: data.sortOrder ?? 0,
    createdAt:
      data.createdAt?.toDate?.()?.toISOString() ??
      "",
    repo: data.repo ?? "",
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const snapshot = await adminDb
    .collection("projects")
    .orderBy("sortOrder", "asc")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) =>
    formatProject(doc.id, doc.data())
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const snapshot = await adminDb
    .collection("projects")
    .where("featured", "==", true)
    .orderBy("sortOrder", "asc")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) =>
    formatProject(doc.id, doc.data())
  );
}

export async function getProjectById(
  id: string
): Promise<Project | undefined> {
  const doc = await adminDb
    .collection("projects")
    .doc(id)
    .get();

  if (!doc.exists) {
    return undefined;
  }

  return formatProject(doc.id, doc.data()!);
}

export async function createProject(data: {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string;
  featured: boolean;
  sortOrder: number;
  repo: string;
}) {
  const docRef = await adminDb
    .collection("projects")
    .add({
      ...data,
      createdAt: new Date(),
    });

  return {
    id: docRef.id,
  };
}

export async function updateProject(
  id: string,
  data: {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    tags: string;
    featured: boolean;
    sortOrder: number;
    repo: string;
  }
) {
  await adminDb
    .collection("projects")
    .doc(id)
    .update(data);

  return {
    success: true,
  };
}

export async function deleteProject(id: string) {
  await adminDb
    .collection("projects")
    .doc(id)
    .delete();

  return {
    success: true,
  };
}