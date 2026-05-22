import React from 'react'

export default function HeroBanner() {
  return (
    <section className="bg-gray-800 flex items-center justify-center w-screen">
      <div className="text-white flex items-center justify-between gap-20 w-full px-20 py-20 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-700 w-56 h-56 flex items-center justify-center mb-8">
            <img src="https://via.placeholder.com/140" alt="avatar" className="rounded-full" />
          </div>
          <h3 className="text-4xl font-semibold">Sinan</h3>
          <p className="text-xl text-gray-300 mt-2">Full-stack developer</p>
        </div>

        <div className="flex-1 text-white min-w-min">
          <h1 className="text-7xl font-bold leading-tight">Hey
            <span className="block">I&apos;m <span className="text-teal-300">Sinan</span>,</span>
            <span className="block">Full-Stack Developer</span>
          </h1>
          <p className="mt-10 text-xl text-gray-300 max-w-2xl">I help business grow by crafting amazing web experiences. If you&apos;re looking for a developer that likes to get stuff done, let&apos;s talk.</p>
          <button className="mt-10 px-10 py-4 bg-teal-500 text-white rounded font-semibold text-lg hover:bg-teal-600 transition">Let&apos;s Talk</button>
        </div>

        <aside className="flex flex-col gap-10 w-64">
          <div className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center">
            <div className="text-6xl font-bold">4</div>
            <div className="text-base text-white mt-6">Programming Language</div>
          </div>
          <div className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center">
            <div className="text-6xl font-bold">6</div>
            <div className="text-base text-white mt-6">Development Tools</div>
          </div>
          <div className="bg-gray-900 text-teal-300 rounded-3xl p-12 shadow-xl text-center">
            <div className="text-6xl font-bold">8</div>
            <div className="text-base text-white mt-6">Years of Experience</div>
          </div>
        </aside>
      </div>
    </section>
  )
}
