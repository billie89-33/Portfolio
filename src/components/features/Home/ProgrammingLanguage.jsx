const techStack = [
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Axios', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

export default function ProgrammingLanguage() {
  return (
    <section id="tech-stack" className="scroll-mt-20 bg-gray-800 px-4 py-14 text-white sm:px-5 sm:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Skills</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="aspect-square rounded-3xl border border-teal-300/20 bg-gray-900/90 p-3 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50 sm:p-5"
            >
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-teal-300/25 bg-gray-800/70 p-3 text-center sm:gap-4 sm:p-4">
                {tech.image ? (
                  <img
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    className={`h-12 w-12 object-contain sm:h-16 sm:w-16 ${['Express', 'Axios', 'GitHub'].includes(tech.name) ? 'brightness-0 invert' : ''}`}
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-300/10 text-base font-bold text-teal-300 sm:h-16 sm:w-16 sm:text-lg">
                    {tech.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
