const experiences = [
  {
    title: "Junior Architect",
    organization: "Credence Housing Limited",
    period: "June 2024 - January 2025",
    points: [
      "Designed and developed residential architectural plans and aesthetic concepts aligned with regulations and client requirements.",
      "Collaborated with engineers, contractors, and project stakeholders to support smooth delivery from design to completion.",
    ],
  },
  {
    title: "Intern Architect",
    organization: "Nakshabid Architects",
    period: "March 2024 - May 2024",
    points: [
      "Contributed across all phases of design and construction on seven national and international projects.",
      "Produced drawings, layouts, 3D models, renderings, and video animations while assisting clients throughout project development.",
    ],
  },
];

const education = [
  {
    institution: "Khulna University of Engineering & Technology, Khulna",
    degree: "Bachelor of Architecture (B.Arch.)",
    year: "2024",
    result: "CGPA: 3.49/4.0",
    detail:
      "Thesis: Co-existence between Human and Nature: Ecotourism Hub for Promoting Responsible Tourism in Nijhum Dwip.",
  },
  {
    institution: "Saidpur Govt. Science College, Saidpur",
    degree: "Higher Secondary Education (H.S.C)",
    year: "2017",
    result: "GPA: 4.97/5.0",
  },
  {
    institution: "Birganj Pilot Govt. High School, Birganj, Dinajpur",
    degree: "Secondary School Certificate (S.S.C)",
    year: "2015",
    result: "GPA: 5.0/5.0",
  },
];

const leadership = [
  "Vice President, Dhrupodi - Dancers' Association of KUET",
  "Vice President, KUET Theatre",
  "Vice President, Greater Rangpur Dinajpur Association, KUET",
];

const awards = [
  "Dean's Honour Award, 2023, for outstanding academic grades.",
  "Departmental research award, 2020, for final year undergraduate research work.",
  "Best Abstract, National Seminar on Navigating Post-COVID Challenges and Way Forward in Bangladesh, March 6, 2024.",
];

const softwareSkills = [
  "AutoCAD 2D",
  "SketchUp",
  "Photoshop",
  "Lumion",
  "Revit",
  "V-Ray",
];

const personalStrengths = [
  "Excellent communication",
  "Interpersonal relationship building",
  "Leadership and team collaboration",
  "Organizational ability",
  "Time and project management",
];

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden border border-neutral-200 bg-white p-8 md:p-12">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(17,24,39,0.06),rgba(17,24,39,0))]" />

          <p className="relative text-sm uppercase tracking-[0.35em] text-neutral-500">
            About The Studio
          </p>
          <h1 className="relative mt-5 max-w-3xl text-4xl font-light leading-tight text-black md:text-6xl">
            in nature architects is built by Shuvrojit Roy, with a vision for
            architecture that feels thoughtful, responsible, and deeply
            connected to nature.
          </h1>

          <div className="relative mt-8 max-w-3xl space-y-5 text-base leading-8 text-neutral-600 md:text-lg">
            <p>
              Based in Bangladesh and shaped through architectural education at
              KUET, Shuvrojit brings together spatial clarity, environmental
              sensitivity, and a strong belief that design can contribute to
              better societies.
            </p>
            <p>
              His approach is grounded in the idea that architecture should not
              remain confined within four walls. It should engage landscape,
              people, culture, and the built environment in ways that create
              meaningful and positive impact.
            </p>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Education
              </p>
              <p className="mt-3 text-lg text-black">B.Arch., KUET</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Experience
              </p>
              <p className="mt-3 text-lg text-black">Architecture Practice</p>
            </div>
            <div className="border border-neutral-200 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Focus
              </p>
              <p className="mt-3 text-lg text-black">
                Human, Nature, Built Form
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="relative overflow-hidden border border-neutral-200 bg-neutral-50 p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(17,24,39,0.1),transparent_50%)]" />
            <div className="relative overflow-hidden border border-neutral-200 bg-white">
              <img
                src="/shuvrojit.png"
                alt="Portrait of Shuvrojit Roy"
                className="h-[420px] w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Founder
            </p>
            <h2 className="mt-4 text-3xl font-light text-black">
              Shuvrojit Roy
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-600">
              <p>KUET, Khulna, Bangladesh</p>
              <p>
                <span className="text-black">Phone:</span> +880-1611725032
              </p>
              <p>
                <span className="text-black">Email:</span>{" "}
                <a
                  href="mailto:shuvrojitroy32@gmail.com"
                  className="transition hover:text-black"
                >
                  shuvrojitroy32@gmail.com
                </a>
              </p>
              <p>
                <span className="text-black">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/shuvrojit-roy-aa815220b/"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all transition hover:text-black"
                >
                  shuvrojit-roy-aa815220b
                </a>
              </p>
            </div>
          </div>

          <div className="border border-neutral-200 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Professional Summary
            </p>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              Architecture, for Shuvrojit Roy, is a comprehensive discipline
              that must be explored through creativity, observation, and lived
              engagement with the world. His goal is to help shape a better
              built environment through responsible design decisions that serve
              people and place together.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-10">
          <section className="border border-neutral-200 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Education
            </p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div
                  key={`${item.institution}-${item.year}`}
                  className="border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg text-black">{item.institution}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.22em] text-neutral-500">
                        {item.degree}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-500">{item.year}</p>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600">{item.result}</p>
                  {item.detail && (
                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="border border-neutral-200 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Skills & Competences
            </p>

            <div className="mt-6">
              <h3 className="text-lg text-black">Personal Strengths</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {personalStrengths.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg text-black">Software</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {softwareSkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-black bg-black px-4 py-2 text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-10">
          <section className="border border-neutral-200 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Work Experience
            </p>
            <div className="mt-6 space-y-8">
              {experiences.map((item) => (
                <div
                  key={`${item.title}-${item.organization}`}
                  className="border-l border-neutral-200 pl-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl text-black">{item.title}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.22em] text-neutral-500">
                        {item.organization}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-500">{item.period}</p>
                  </div>

                  <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-200 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Leadership
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-600">
                {leadership.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="border border-neutral-200 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Awards & Honors
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-600">
                {awards.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
