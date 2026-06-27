
import avatarImg from '../../../assets/35362295_1828678877178722_6936296256608141312_n.jpg'

export default function HeroBanner() {
  return (
    <section className="flex w-full items-center justify-center overflow-x-hidden bg-gray-800">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-8 px-4 py-10 text-white sm:px-5 sm:py-14 lg:gap-12 xl:flex-row xl:gap-20">
        <div className="relative flex w-full max-w-[400px] flex-col items-center rounded-[2rem] border border-teal-400/20 bg-gray-900/90 p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-teal-400/10" />
          <div className="relative mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gray-700 sm:mb-8 sm:h-56 sm:w-56">
            <img src={avatarImg} alt="Bovorn avatar" className="h-28 w-28 rounded-full object-cover sm:h-40 sm:w-40" />
          </div>
          <h3 className="relative text-3xl font-semibold sm:text-4xl">Bowvorn</h3>
          <p className="relative mb-6 mt-2 text-lg text-gray-300 sm:mb-8 sm:text-xl">Full-stack developer</p>

          <div className="relative w-full space-y-5 text-left">
            <div className="flex items-center gap-4 text-base text-gray-300 sm:text-sm">
              <span className="text-lg text-teal-300 sm:text-base">✉</span>
              <span>Bowvorn@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-base text-gray-300 sm:text-sm">
              <span className="text-lg text-teal-300 sm:text-base">📍</span>
              <span>Thailand</span>
            </div>
            <div className="flex items-center gap-4 text-base text-gray-300 sm:text-sm">
              <span className="text-lg text-teal-300 sm:text-base">💼</span>
              <span>Full-time </span>
            </div>
            <div className="flex items-center gap-4 text-base text-gray-300 sm:text-sm">
              <span className="text-lg text-teal-300 sm:text-base">🔗</span>
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
            {['HTML', 'CSS', 'JS', 'REACT', 'Node.js', 'Express', 'Axios', 'MongoDB', 'GitHub'].map((skill) => (
              <span key={skill} className="rounded-full bg-teal-300/10 px-4 py-2 text-sm text-teal-300 ring-1 ring-teal-300/25">
                {skill}
              </span>
            ))}
          </div>

          <button className="mt-10 w-full rounded-full bg-white py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100">
            Download CV
          </button>
        </div>

        <div className="w-full min-w-0 flex-1 text-white">
          <div className="w-full max-w-3xl rounded-3xl border border-teal-300/20 bg-[#1e1e1e] p-4 font-mono shadow-[0_30px_70px_-45px_rgba(20,184,166,0.65)] sm:p-6 lg:max-w-4xl lg:p-10">
            <p className="text-sm text-[#6a9955]">// portfolio.js</p>
            <pre className="mt-5 overflow-x-auto whitespace-pre text-sm leading-7 text-[#d4d4d4] sm:text-base md:text-lg lg:overflow-visible lg:whitespace-pre-wrap lg:text-lg lg:leading-9">
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
            className="mt-8 inline-flex w-full justify-center rounded bg-teal-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-teal-600 sm:w-auto sm:text-lg"
          >
            Let&apos;s Talk
          </a>
        </div>

        <aside className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 xl:w-64 xl:grid-cols-1 xl:gap-10">
          <a
            href="#tech-stack"
            className="rounded-3xl bg-gray-900 p-6 text-center text-teal-300 shadow-xl transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:p-8 xl:p-12"
          >
            <div className="text-4xl font-bold sm:text-5xl xl:text-6xl">9</div>
            <div className="mt-4 text-sm text-white sm:text-base xl:mt-6">Tech Stack</div>
          </a>
          <a
            href="#development-tools"
            className="rounded-3xl bg-gray-900 p-6 text-center text-teal-300 shadow-xl transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:p-8 xl:p-12"
          >
            <div className="text-4xl font-bold sm:text-5xl xl:text-6xl">7</div>
            <div className="mt-4 text-sm text-white sm:text-base xl:mt-6">Development Tools</div>
          </a>
          <a
            href="#featured-project"
            className="rounded-3xl bg-gray-900 p-6 text-center text-teal-300 shadow-xl transition hover:-translate-y-1 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:p-8 xl:p-12"
          >
            <div className="text-4xl font-bold sm:text-5xl xl:text-6xl">4</div>
            <div className="mt-4 text-sm text-white sm:text-base xl:mt-6">Featured Projects</div>
          </a>
        </aside>
      </div>
    </section>
  )
}
