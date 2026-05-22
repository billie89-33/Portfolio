const toolSections = [
  {
    title: 'API & Testing',
    description: 'Tools I use to test REST APIs, check CRUD flows, inspect requests, and verify backend behavior during development.',
    tools: ['.rest (REST Client)', 'Postman', 'Thunder Client'],
  },
  {
    title: 'Database',
    description: 'Database platforms and services I work with for schema design, data storage, and app integration.',
    tools: ['PostgreSQL', 'Supabase', 'MongoDB Atlas'],
  },
  {
    title: 'Design & Workflow',
    description: 'Design and collaboration tools used to plan interfaces and keep development aligned with UI goals.',
    tools: ['Figma'],
  },
]

export default function DevelopmentTools() {
  return (
    <section id="development-tools" className="scroll-mt-20 bg-gray-800 px-4 py-14 text-white sm:px-5 sm:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Workflow</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Development Tools</h2>
        </div>

        <div className="grid gap-5 sm:gap-8 lg:grid-cols-2">
          {toolSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50 sm:min-h-72 sm:p-8"
            >
              <p className="text-base font-semibold uppercase text-teal-300">{section.title}</p>
              <p className="mt-4 text-sm leading-6 text-gray-300 sm:mt-5 sm:min-h-24 sm:text-base sm:leading-7">{section.description}</p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                {section.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-300 ring-1 ring-teal-300/25 sm:px-5 sm:py-3"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
