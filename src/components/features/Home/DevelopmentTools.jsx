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
    <section id="development-tools" className="scroll-mt-20 bg-gray-800 px-5 py-20 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase text-teal-300">Workflow</p>
          <h2 className="mt-3 text-4xl font-bold">Development Tools</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {toolSections.map((section) => (
            <div
              key={section.title}
              className="min-h-72 rounded-3xl border border-teal-300/20 bg-gray-900/90 p-8 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] transition hover:-translate-y-1 hover:border-teal-300/50"
            >
              <p className="text-base font-semibold uppercase text-teal-300">{section.title}</p>
              <p className="mt-5 min-h-24 text-base leading-7 text-gray-300">{section.description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                {section.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-teal-300/10 px-5 py-3 text-sm font-semibold text-teal-300 ring-1 ring-teal-300/25"
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
