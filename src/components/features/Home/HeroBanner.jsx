import React from 'react'

export default function HeroBanner() {
  return (
    <section className="bg-gray-800 flex items-center justify-center w-screen">
      <div className="text-white flex items-center justify-center gap-25 w-full max-w-[1400px] px-5 py-15 mx-auto flex-wrap">
        <div className="relative flex flex-col items-center w-[360px] rounded-[2.5rem] border border-teal-400/20 bg-gray-900/90 p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-teal-400/10" />
          <div className="relative rounded-full bg-gray-700 w-56 h-56 flex items-center justify-center mb-8">
            <img src="https://via.placeholder.com/140" alt="avatar" className="rounded-full" />
          </div>
          <h3 className="relative text-4xl font-semibold">Bovorn</h3>
          <p className="relative text-xl text-gray-300 mt-2 mb-8">Full-stack developer</p>

          <div className="relative w-full space-y-4 text-left">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="text-teal-300">✉</span>
              <span>Bowvorn@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="text-teal-300">📍</span>
              <span>Thailand</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="text-teal-300">💼</span>
              <span>Full-time </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="text-teal-300">🔗</span>
              <a
                href="https://github.com/billie89-33"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-300"
              >
                github.com/billie89-33
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['HTML', 'CSS', 'JS', 'REACT', 'Node.js', 'Express', 'Axios', 'MongoDB'].map((skill) => (
              <span key={skill} className="rounded-full bg-teal-300/10 px-4 py-2 text-sm text-teal-300 ring-1 ring-teal-300/25">
                {skill}
              </span>
            ))}
          </div>

          <button className="mt-10 w-full rounded-full bg-white py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100">
            Download CV
          </button>
        </div>

        <div className="flex-1 text-white min-w-min">
          <div className="max-w-3xl rounded-3xl border border-teal-300/20 bg-[#1e1e1e] p-8 font-mono shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)]">
            <p className="text-sm text-[#6a9955]">// portfolio.js</p>
            <pre className="mt-5 overflow-x-auto whitespace-pre-wrap text-base leading-8 text-[#d4d4d4] md:text-lg">
              <code>
                <span className="text-[#569cd6]">const</span>
                <span> </span>
                <span className="text-[#4fc1ff]">developer</span>
                <span> </span>
                <span className="text-[#d4d4d4]">=</span>
                <span> </span>
                <span className="text-[#ffd700]">&#123;</span>
                {'\n  '}
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">&quot;Bovorn&quot;</span>
                <span className="text-[#d4d4d4]">,</span>
                {'\n  '}
                <span className="text-[#9cdcfe]">role</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">&quot;Full-Stack Developer&quot;</span>
                <span className="text-[#d4d4d4]">,</span>
                {'\n  '}
                <span className="text-[#9cdcfe]">description</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">
                  &quot;I build responsive web apps, REST API features, CRUD workflows, and database-backed projects.&quot;
                </span>
                <span className="text-[#d4d4d4]">,</span>
                {'\n  '}
                <span className="text-[#9cdcfe]">stack</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#c586c0]">[</span>
                <span className="text-[#ce9178]">&quot;React&quot;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">&quot;Node.js&quot;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">&quot;Express&quot;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">&quot;MongoDB&quot;</span>
                <span className="text-[#c586c0]">]</span>
                <span className="text-[#d4d4d4]">,</span>
                {'\n'}
                <span className="text-[#ffd700]">&#125;</span>
              </code>
            </pre>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bowvorn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex px-10 py-4 bg-teal-500 text-white rounded font-semibold text-lg hover:bg-teal-600 transition"
          >
            Let&apos;s Talk
          </a>
        </div>

        <aside className="flex flex-col gap-10 w-64">
          <a
            href="#tech-stack"
            className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <div className="text-6xl font-bold">8</div>
            <div className="text-base text-white mt-6">Tech Stack</div>
          </a>
          <a
            href="#development-tools"
            className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <div className="text-6xl font-bold">7</div>
            <div className="text-base text-white mt-6">Development Tools</div>
          </a>
          <a
            href="#featured-project"
            className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <div className="text-6xl font-bold">2</div>
            <div className="text-base text-white mt-6">Featured Projects</div>
          </a>
        </aside>
      </div>
    </section>
  )
}
