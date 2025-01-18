import { useParams } from 'next/navigation';

const projects = [
  { id: "1", title: "Project One", description: "Description for Project One" },
  { id: "2", title: "Project Two", description: "Description for Project Two" },
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
