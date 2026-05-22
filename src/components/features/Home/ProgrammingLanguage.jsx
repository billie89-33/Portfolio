const techStack = [
  { name: 'HTML', image: '' },
  { name: 'CSS', image: '' },
  { name: 'JavaScript', image: '' },
  { name: 'React', image: '' },
  { name: 'Node.js', image: '' },
  { name: 'Express', image: '' },
  { name: 'Axios', image: '' },
  { name: 'MongoDB', image: '' },
]

export default function ProgrammingLanguage() {
  return (
    <section id="tech-stack" className="scroll-mt-20 bg-gray-800 px-5 py-20 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Skills</p>
          <h2 className="mt-3 text-4xl font-bold">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="aspect-square rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-teal-300/25 bg-gray-800/70 p-4 text-center">
                {tech.image ? (
                  <img src={tech.image} alt={`${tech.name} logo`} className="h-16 w-16 object-contain" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-300/10 text-lg font-bold text-teal-300">
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
