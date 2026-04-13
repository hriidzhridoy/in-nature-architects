import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MEDIA_URL } from "../config/env";
import API from "../services/api";
import { showError } from "../utils/swal";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        const { data } = await API.get(`/projects/${id}`);
        setProject(data);

        if (data.images && data.images.length > 0) {
          setActiveImage(`${MEDIA_URL}${data.images[0]}`);
        }
      } catch (error) {
        console.error(error);
        showError("Failed to load project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="text-neutral-500">Loading project...</p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="text-neutral-500">Project not found.</p>
        <Link
          to="/projects"
          className="mt-4 inline-block border border-black px-5 py-3 text-sm uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
        >
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-10">
        <Link
          to="/projects"
          className="text-sm uppercase tracking-[0.25em] text-neutral-500 transition hover:text-black"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="overflow-hidden border border-neutral-200">
            {activeImage ? (
              <img
                src={activeImage}
                alt={project.title}
                className="h-[520px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[520px] items-center justify-center bg-neutral-100 text-neutral-400">
                No Image Available
              </div>
            )}
          </div>

          {project.images && project.images.length > 1 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {project.images.map((img, index) => {
                const imageUrl = `${MEDIA_URL}${img}`;
                const isActive = activeImage === imageUrl;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(imageUrl)}
                    className={`overflow-hidden border transition ${
                      isActive
                        ? "border-black"
                        : "border-neutral-200 hover:border-black"
                    }`}
                  >
                    <img
                      src={imageUrl}
                      alt={`${project.title} ${index + 1}`}
                      className="h-28 w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="self-start">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-light leading-tight text-black md:text-5xl">
            {project.title}
          </h1>

          <div className="mt-8 border-t border-neutral-200 pt-8">
            <h2 className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Project Overview
            </h2>

            <p className="mt-4 text-base leading-8 text-neutral-600">
              {project.description}
            </p>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-8">
            <h2 className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Details
            </h2>

            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              <p>
                <span className="font-medium text-black">Category:</span>{" "}
                {project.category}
              </p>
              <p>
                <span className="font-medium text-black">Project ID:</span>{" "}
                {project._id}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block border border-black bg-black px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
