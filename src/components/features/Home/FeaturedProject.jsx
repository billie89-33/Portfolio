const projects = [
  {
    name: 'Creative Market',
    type: 'Frontend Web Application',
    repository: 'https://github.com/billie89-33/creative-market-front-end-sprint-2.git',
    liveDemo: 'https://creative-market-front-end-sprint-2-mu.vercel.app/',
    description:
      'A frontend web application for a creative marketplace built during Sprint 2. This project emphasizes interactive user interfaces, clean component design, state management, and modern responsive web layouts.',
    details: [
      'Built as a fully responsive creative marketplace frontend.',
      'Developed using modern React practices and component-driven architecture.',
      'Focuses on smooth interactive user experiences and clean web styling.',
      'Deployed live with continuous integration on Vercel.',
    ],
  },
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
  {
    name: 'Mood Tracker',
    type: 'React Application',
    repository: 'https://github.com/billie89-33/week_09_Mood-Tracker',
    liveDemo: 'https://week-09-mood-tracker.vercel.app',
    description:
      'A React mood tracking application that lets users select moods, attach dates, and manage a history list. The project focuses on component-based UI, state management, forms, and responsive styling.',
    details: [
      'Built with reusable React components for inputs, mood buttons, save actions, and history cards.',
      'Uses props, useState, and event handlers to manage user interaction and app state.',
      'Includes conditional rendering and dynamic lists to display saved mood history.',
      'Styled with Tailwind CSS for a responsive user interface.',
    ],
  },
  {
    name: 'Colmar Academy',
    type: 'CSS Layout Project',
    repository: 'https://github.com/billie89-33/03-bank-colmar',
    liveDemo: 'https://03-bank-colmar.vercel.app',
    description:
      'A CSS-focused landing page project based on the Colmar Academy layout. This project highlights page structure, visual spacing, typography, responsive layout work, and styling from provided design assets.',
    details: [
      'Built with HTML and CSS to practice page layout and visual hierarchy.',
      'Uses real image and video assets across hero, information, course, and thesis sections.',
      'Shows CSS skills in spacing, typography, responsive sections, and card-style content layouts.',
      'Deployed as a live static page on Vercel.',
    ],
  },
]

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="scroll-mt-20 bg-gray-800 px-4 py-14 text-white sm:px-5 sm:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Portfolio Work</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        </div>

        <div className="grid gap-5 sm:gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50 sm:p-8"
            >
              <p className="text-base font-semibold uppercase text-teal-300">{project.type}</p>
              <h3 className="mt-4 break-words text-2xl font-bold text-white sm:text-3xl">{project.name}</h3>
              <p className="mt-5 text-sm leading-6 text-gray-300 sm:min-h-28 sm:text-base sm:leading-7">{project.description}</p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    Live Demo
                  </a>
                ) : null}
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  View on GitHub
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-teal-300/20 bg-gray-800/70 p-4 sm:mt-8 sm:p-6">
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
