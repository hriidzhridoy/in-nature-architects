import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { confirmAction, showError, showSuccess } from "../utils/swal";

function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/projects");
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (projectId) => {
    const isConfirmed = await confirmAction(
      "Delete Project?",
      "This project will be permanently deleted.",
      "Yes, Delete",
    );

    if (!isConfirmed) return;

    try {
      setDeletingId(projectId);

      const token = localStorage.getItem("adminToken");

      await API.delete(`/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects((prev) =>
        prev.filter((project) => project._id !== projectId),
      );

      showSuccess("Project deleted successfully");
    } catch (error) {
      console.error(error);
      showError("Failed to delete project");
    } finally {
      setDeletingId(null);
    }
  };

  const BASE_URL = import.meta.env.VITE_API_URL;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="flex flex-col gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Admin
          </p>
          <h1 className="mt-2 text-4xl font-light text-black">
            Manage Projects
          </h1>
        </div>

        <Link
          to="/admin/add-project"
          className="inline-flex w-fit items-center border border-black bg-black px-5 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
        >
          Add New Project
        </Link>
      </div>

      {loading ? (
        <div className="py-10 text-neutral-500">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="py-10 text-neutral-500">No projects found.</div>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full border border-neutral-200">
            <thead className="bg-neutral-50">
              <tr className="text-left">
                <th className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700">
                  Image
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700">
                  Title
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700">
                  Category
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700">
                  Description
                </th>
                <th className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project._id} className="align-top">
                  <td className="border-b border-neutral-200 px-4 py-4">
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={`${BASE_URL}${project.images[0]}`}
                        alt={project.title}
                        className="h-20 w-24 object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-24 items-center justify-center bg-neutral-100 text-xs text-neutral-400">
                        No Image
                      </div>
                    )}
                  </td>

                  <td className="border-b border-neutral-200 px-4 py-4 text-sm text-black">
                    {project.title}
                  </td>

                  <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                    {project.category}
                  </td>

                  <td className="border-b border-neutral-200 px-4 py-4 text-sm text-neutral-600">
                    <p className="max-w-md line-clamp-3">
                      {project.description}
                    </p>
                  </td>

                  <td className="border-b border-neutral-200 px-4 py-4">
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/admin/edit-project/${project._id}`}
                        className="border border-neutral-300 px-4 py-2 text-xs uppercase tracking-wider text-neutral-700 transition hover:border-black hover:text-black"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(project._id)}
                        disabled={deletingId === project._id}
                        className="border border-red-500 px-4 py-2 text-xs uppercase tracking-wider text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deletingId === project._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ManageProjects;
