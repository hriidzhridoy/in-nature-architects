import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import { showSuccess, showError, showLoading, closeAlert } from "../utils/swal";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const { data } = await API.get(`/projects/${id}`);

        setTitle(data.title || "");
        setCategory(data.category || "");
        setDescription(data.description || "");
        setExistingImages(data.images || []);
      } catch (error) {
        console.error(error);
        showError("Failed to load project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleImageChange = (e) => {
    setNewImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      showLoading("Updating project...");

      const token = localStorage.getItem("adminToken");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);

      newImages.forEach((image) => {
        formData.append("images", image);
      });

      await API.put(`/projects/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      closeAlert();
      await showSuccess("Project updated successfully");
      navigate("/admin/manage-projects");
    } catch (error) {
      console.error(error);
      closeAlert();
      showError("Failed to update project");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <p className="text-neutral-500">Loading project...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Admin
        </p>
        <h1 className="mt-2 text-4xl font-light text-black">Edit Project</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
          Update the project information and upload new images if needed.
          Uploading new images will replace the current images based on your
          backend update logic.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-8 border border-neutral-200 bg-white p-8"
      >
        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Residential / Commercial / Interior"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Description
          </label>
          <textarea
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            required
          />
        </div>

        <div>
          <label className="mb-4 block text-sm uppercase tracking-wider text-neutral-600">
            Existing Images
          </label>

          {existingImages.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {existingImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-neutral-200"
                >
                  <img
                    src={`http://localhost:5000${img}`}
                    alt={`Project ${index + 1}`}
                    className="h-48 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-500">
              No existing images found.
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Upload New Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-neutral-600 file:mr-4 file:border file:border-black file:bg-black file:px-4 file:py-2 file:text-white hover:file:bg-white hover:file:text-black"
          />
          <p className="mt-2 text-xs text-neutral-500">
            Uploading new images may replace the current images depending on
            backend logic.
          </p>
        </div>

        {newImages.length > 0 && (
          <div>
            <label className="mb-4 block text-sm uppercase tracking-wider text-neutral-600">
              New Image Preview
            </label>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {newImages.map((file, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-neutral-200"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="h-48 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="border border-black bg-black px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Updating..." : "Update Project"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/manage-projects")}
            className="border border-neutral-300 px-6 py-3 text-sm uppercase tracking-wider text-neutral-700 transition hover:border-black hover:text-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditProject;
