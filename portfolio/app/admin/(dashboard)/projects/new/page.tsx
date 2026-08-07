import { createProjectAction } from "@/lib/actions";
import ProjectForm from "@/components/project-form";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-paper">New project</h1>
      <ProjectForm action={createProjectAction} />
    </div>
  );
}
