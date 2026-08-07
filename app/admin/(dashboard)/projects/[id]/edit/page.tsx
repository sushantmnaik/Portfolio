import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { updateProjectAction } from "@/lib/actions";
import ProjectForm from "@/components/project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(Number(id));
  if (!project) notFound();

  const action = updateProjectAction.bind(null, project.id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-paper">Edit project</h1>
      <ProjectForm action={action} project={project} />
    </div>
  );
}
