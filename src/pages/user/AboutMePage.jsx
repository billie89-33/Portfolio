import React from 'react'

const highlights = [
  'Build responsive interfaces with HTML, CSS, JavaScript, and React.',
  'Create backend services with Node.js and Express.',
  'Connect frontend apps to REST APIs with Axios.',
  'Design and test CRUD workflows for real application features.',
  'Work with MongoDB, MongoDB Atlas, PostgreSQL, and Supabase.',
  'Use Postman, Thunder Client, and REST Client to test API behavior.',
  'Plan UI structure and development flow with Figma.',
]

export default function AboutMePage() {
  return (
    <section className="min-h-screen bg-gray-800 px-4 py-14 text-white sm:px-5 sm:py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-8 sm:mb-12">
          <p className="text-sm font-semibold uppercase text-teal-300">About Me</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Full-Stack Developer focused on practical web solutions.</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            I build modern web applications from the user interface to the backend API. My work focuses on clean
            React interfaces, reliable REST API integration, CRUD features, and database-backed applications that are
            easy to use and maintain.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">What I can do</h2>
            <p className="mt-5 text-base leading-7 text-gray-300">
              I can turn a UI idea into a working full-stack feature: structure the page, build reusable React
              components, connect data through REST endpoints, test requests, and store data in a database. I also use
              API tools during development to verify create, read, update, and delete flows before polishing the user
              experience.
            </p>
          </div>

          <div className="rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Current stack</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Axios', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-300 ring-1 ring-teal-300/25"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-teal-300/20 bg-gray-900/90 p-5 shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Skills and workflow</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-teal-300/15 bg-gray-800/70 p-5 text-gray-300">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
