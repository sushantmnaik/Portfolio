"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";
import {
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/projects";
import { deleteMessage } from "@/lib/messages";

async function requireAdmin() {
  const session = await auth();
  if (!session) redirect("/admin/login");
}

function parseProjectForm(formData: FormData) {
  return {
    title: String(formData.get("title") || ""),
    description: String(formData.get("description") || ""),
    imageUrl: String(formData.get("imageUrl") || ""),
    projectUrl: String(formData.get("projectUrl") || ""),
    tags: String(formData.get("tags") || ""),
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder") || 0),
    repo: String(formData.get("repo") || ""),
  };
}

export async function createProjectAction(formData: FormData) {
  await requireAdmin();
  createProject(parseProjectForm(formData));
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateProjectAction(id: number, formData: FormData) {
  await requireAdmin();
  updateProject(id, parseProjectForm(formData));
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteProjectAction(id: number) {
  await requireAdmin();
  deleteProject(id);
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin");
}

export async function deleteMessageAction(id: number) {
  await requireAdmin();
  deleteMessage(id);
  revalidatePath("/admin/messages");
}

export async function logoutAction() {
  await signOut({ redirectTo: "/admin/login" });
}
