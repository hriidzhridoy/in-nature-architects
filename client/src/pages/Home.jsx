const practicePillars = [
  {
    title: "Context Driven",
    description:
      "Each project begins with climate, site lines, and the rhythm of the surrounding landscape.",
  },
  {
    title: "Material Honesty",
    description:
      "We favor stone, timber, concrete, and quiet finishes that age with character over time.",
  },
  {
    title: "Human Comfort",
    description:
      "Natural light, airflow, proportion, and movement shape spaces that feel calm and lived in.",
  },
];

const featuredSpaces = [
  {
    label: "01",
    title: "Homes With Courtyard Light",
    description:
      "Private residences arranged around green pockets, filtered daylight, and shaded transitions.",
  },
  {
    label: "02",
    title: "Boutique Hospitality",
    description:
      "Retreats and stays designed to dissolve the line between architecture and landscape.",
  },
  {
    label: "03",
    title: "Workspaces In Nature",
    description:
      "Studios and offices that support focus through soft material palettes and open spatial flow.",
  },
];

const processSteps = [
  "Listening closely to the client, site, and daily rituals.",
  "Developing concept directions through massing, light, and material studies.",
  "Refining every room, threshold, and landscape relationship with care.",
  "Delivering spaces that feel grounded, timeless, and deeply usable.",
];

function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
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

          <div className="mt-8 flex flex-wrap gap-4">
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

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
            alt="Architecture"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-24 border-t border-neutral-200 pt-16 md:mt-32 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Our Approach
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-light leading-tight text-black md:text-5xl">
              Architecture that feels quiet, rooted, and open to the outdoors.
            </h2>
          </div>

          <div className="grid gap-6">
            {practicePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-neutral-200 p-6 md:p-8"
              >
                <h3 className="text-xl font-medium text-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Featured Focus
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-black md:text-5xl">
              Spaces designed to breathe.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-neutral-600">
            Across residential, hospitality, and workplace projects, we search
            for clarity, warmth, and a strong relationship to the site.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredSpaces.map((space) => (
            <article
              key={space.label}
              className="flex min-h-[280px] flex-col justify-between bg-neutral-50 p-8"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                {space.label}
              </span>
              <div className="mt-12">
                <h3 className="text-2xl font-light leading-tight text-black">
                  {space.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-12 md:mt-32 md:grid-cols-[1fr_0.9fr] md:items-start">
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Interior architecture"
            className="h-[520px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Design Process
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-black md:text-5xl">
            A careful path from first conversation to finished place.
          </h2>

          <div className="mt-10 space-y-6">
            {processSteps.map((step, index) => (
              <div key={step} className="border-b border-neutral-200 pb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-lg leading-8 text-neutral-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 bg-black px-8 py-14 text-white md:mt-32 md:px-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Start A Project
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight md:text-5xl">
              Let&apos;s create a space that feels connected to its environment
              and effortless to live in.
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-md text-base leading-7 text-neutral-300">
              Share your vision, your site, or even an early idea. We can shape
              it into a clear architectural direction together.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block border border-white px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
            >
              Book A Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
