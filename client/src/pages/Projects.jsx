import { useEffect, useState } from "react";
import API from "../services/api";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-light md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          A selection of residential, commercial, and conceptual projects by
          innaturesarchitects.
        </p>
      </div>

      {loading ? (
        <p className="text-neutral-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-neutral-500">No projects found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
