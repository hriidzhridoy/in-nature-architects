import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  return (
    <Link
      to={`/projects/${project._id}`}
      className="group block border border-neutral-200 bg-white transition hover:border-black"
    >
      <div className="overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <img
            src={`${BASE_URL}${project.images[0]}`}
            alt={project.title}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-72 items-center justify-center bg-neutral-100 text-neutral-400">
            No Image
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
          {project.category}
        </p>
        <h3 className="text-2xl font-light text-black">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
          {project.description}
        </p>

        <div className="mt-5 text-sm uppercase tracking-wider text-black">
          View Details
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
