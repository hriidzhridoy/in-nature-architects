import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        Admin Panel
      </p>
      <h1 className="mt-3 text-4xl font-light">Dashboard</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Link
          to="/admin/add-project"
          className="border border-neutral-200 p-6 transition hover:border-black"
        >
          <h2 className="text-xl font-medium">Add Project</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Upload a new architecture project.
          </p>
        </Link>

        <Link to="/admin/manage-projects">
          <div className="border border-neutral-200 p-6">
            <h2 className="text-xl font-medium">Manage Projects</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Later you can add edit and delete pages here.
            </p>
          </div>
        </Link>

        <button
          onClick={logoutHandler}
          className="border border-black p-6 text-left transition hover:bg-black hover:text-white"
        >
          <h2 className="text-xl font-medium">Logout</h2>
          <p className="mt-2 text-sm opacity-80">Sign out from admin panel.</p>
        </button>
      </div>
    </section>
  );
}

export default AdminDashboard;
