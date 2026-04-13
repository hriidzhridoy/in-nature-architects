import { useState } from "react";
import API, { withMultipartAuth } from "../services/api";
import { showError, showSuccess } from "../utils/swal";

function AddProject() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await API.post("/projects", formData, withMultipartAuth());

      showSuccess("Project uploaded successfully");

      setTitle("");
      setCategory("");
      setDescription("");
      setImages([]);
    } catch (error) {
      console.error(error);
      showError("Upload failed");
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-10">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        Admin
      </p>
      <h1 className="mt-3 text-4xl font-light">Add New Project</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6 border border-neutral-200 p-8"
      >
        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter project title"
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
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Residential / Commercial / Interior"
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
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter project description"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-wider text-neutral-600">
            Upload Images
          </label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
            className="block w-full text-sm text-neutral-600 file:mr-4 file:border file:border-black file:bg-black file:px-4 file:py-2 file:text-white hover:file:bg-white hover:file:text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="border border-black bg-black px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
        >
          Upload Project
        </button>
      </form>
    </section>
  );
}

export default AddProject;
