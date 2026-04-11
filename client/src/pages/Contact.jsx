function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-light md:text-5xl">
        Let’s discuss your project
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-neutral-600">
          <p>
            Email:{" "}
            <span className="text-black">info@innaturesarchitects.com</span>
          </p>
          <p>
            Phone: <span className="text-black">+880 1XXX-XXXXXX</span>
          </p>
          <p>
            Location: <span className="text-black">Dhaka, Bangladesh</span>
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
          />
          <button
            type="submit"
            className="border border-black px-6 py-3 text-sm uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
