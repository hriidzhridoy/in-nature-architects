import { useState } from "react";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_PHONE,
} from "../config/site";

const inquiryTypes = [
  "Residential Project",
  "Commercial Project",
  "Interior Consultation",
  "Collaboration",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${form.inquiryType} Inquiry from ${form.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInquiry Type: ${form.inquiryType}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="relative overflow-hidden border border-neutral-200 bg-white p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(17,24,39,0.06),rgba(17,24,39,0))]" />

            <p className="relative text-sm uppercase tracking-[0.35em] text-neutral-500">
              Contact
            </p>
            <h1 className="relative mt-4 text-4xl font-light leading-tight text-black md:text-6xl">
              Let&apos;s discuss your project, idea, or collaboration.
            </h1>
            <p className="relative mt-6 max-w-xl text-base leading-8 text-neutral-600">
              Reach out for architecture, interiors, design consultation, or
              creative collaboration. We&apos;d love to hear about your vision
              and how we can shape it together.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="border border-neutral-200 p-6 transition hover:border-black"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Email
              </p>
              <p className="mt-3 break-all text-sm text-black">
                {COMPANY_EMAIL}
              </p>
            </a>

            <a
              href={`tel:${COMPANY_PHONE.replace(/-/g, "")}`}
              className="border border-neutral-200 p-6 transition hover:border-black"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Phone
              </p>
              <p className="mt-3 text-sm text-black">{COMPANY_PHONE}</p>
            </a>

            <div className="border border-neutral-200 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Location
              </p>
              <p className="mt-3 text-sm text-black">{COMPANY_LOCATION}</p>
            </div>
          </div>
        </div>

        <div className="border border-neutral-200 bg-neutral-50 p-8 md:p-10">
          <div className="flex flex-wrap gap-3">
            {inquiryTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    inquiryType: type,
                  }))
                }
                className={`border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  form.inquiryType === type
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 text-neutral-600 hover:border-black hover:text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            <input
              type="text"
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              placeholder="Project Type"
              className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
              required
            />

            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project, timeline, location, and what kind of support you need."
              className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
              required
            />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-sm leading-7 text-neutral-500">
                Your message will open in your email app addressed to{" "}
                <span className="text-black">{COMPANY_EMAIL}</span>.
              </p>

              <button
                type="submit"
                className="border border-black bg-black px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
