import React from 'react'

export const projects = [
  { id: 1, title: 'Portfolio Site', desc: 'Personal portfolio built with React and Tailwind CSS.', live: 'https://www.sunilsubedi.com/', repo: 'https://github.com/SunilSubedi/portfolio' },
  { id: 2, title: 'Todo App', desc: 'A simple todo application demonstrating state and localStorage.', live: 'https://my-todo-app-eight-pink.vercel.app/', repo: 'https://github.com/SunilSubedi/my-todo-app' },
  { id: 3, title: 'Resturant Management System (RMS)', desc: 'A full-stack restaurant management system using Next.js, TypeScript, Prisma, and Tailwind CSS.', live: 'https://next-rms.sunilsubedi.com/sign-in', repo:'https://github.com/SunilSubedi/next-rms'}
]

export function Project() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="p-4 bg-white rounded shadow-sm">
            <h3 className="font-bold text-indigo-900">{p.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
            <div className="mt-3">
              <a className="text-indigo-700 text-sm" href={p.live ?? '#'} target={p.live ? '_blank' : undefined} rel={p.live ? 'noopener noreferrer' : undefined}>{p.live ? 'View' : 'View'}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project