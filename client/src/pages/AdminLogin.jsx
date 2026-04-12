import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { showError, showSuccess } from "../utils/swal";

function AdminLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/admin/login", form);
      localStorage.setItem("adminToken", data.token);
      showSuccess("Login successful");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      showError("Invalid credentials");
    }
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md border border-neutral-200 bg-white p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Admin
        </p>
        <h1 className="mt-2 text-3xl font-light text-black">Login</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
          />

          <button
            type="submit"
            className="w-full border border-black bg-black px-4 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
