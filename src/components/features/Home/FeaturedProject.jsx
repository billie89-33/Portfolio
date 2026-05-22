const projects = [
  {
    name: 'Project_JAMINE',
    type: 'GitHub Repository',
    repository: 'https://github.com/billie89-33/Project_JAMINE',
    liveDemo: 'https://project-jamine.vercel.app/',
    description:
      'A featured GitHub project that shows my development workflow, source code structure, and practical implementation work. This project is currently in development.',
    details: [
      'Currently in development and being improved.',
      'Organized project source code on GitHub.',
      'Shows hands-on development and problem solving.',
      'Useful for reviewing my coding style and project structure.',
    ],
  },
  {
    name: 'Santa Clicker',
    type: 'JavaScript Game',
    repository: 'https://github.com/billie89-33/mini-project-Santa-clicker',
    liveDemo: 'https://santaclicker-theta.vercel.app/',
    description:
      'A browser-based clicker game built with JavaScript, HTML, and CSS. The project uses a Santa-themed interface, game assets, and click-based interactions to create a small playable web game.',
    details: [
      'Built as a deployed web game with a live Vercel demo.',
      'Uses JavaScript for game behavior and score interaction.',
      'Includes themed visual assets for a more complete game experience.',
    ],
  },
]

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="scroll-mt-20 bg-gray-800 px-5 py-20 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Portfolio Work</p>
          <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-teal-300/20 bg-gray-900/90 p-8 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50"
            >
              <p className="text-base font-semibold uppercase text-teal-300">{project.type}</p>
              <h3 className="mt-4 text-3xl font-bold text-white">{project.name}</h3>
              <p className="mt-5 min-h-28 text-base leading-7 text-gray-300">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    Live Demo
                  </a>
                ) : null}
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                View on GitHub
              </a>
              </div>

              <div className="mt-8 rounded-2xl border border-teal-300/20 bg-gray-800/70 p-6">
                <p className="text-sm font-semibold uppercase text-teal-300">Project Notes</p>
                <div className="mt-5 space-y-4">
                  {project.details.map((detail) => (
                    <div key={detail} className="rounded-2xl bg-gray-900/80 p-4 text-sm leading-6 text-gray-300">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
