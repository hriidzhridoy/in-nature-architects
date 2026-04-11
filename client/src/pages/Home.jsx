function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Architecture Studio
          </p>
          <h1 className="max-w-xl text-4xl font-light leading-tight text-black md:text-6xl">
            Thoughtful spaces shaped by nature, light, and timeless simplicity.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
            innaturesarchitects creates minimal, modern, and functional spaces
            with a deep connection to landscape, material, and human experience.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="border border-black px-6 py-3 text-sm uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-neutral-300 px-6 py-3 text-sm uppercase tracking-wider text-neutral-700 transition hover:border-black hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-none">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
            alt="Architecture"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
