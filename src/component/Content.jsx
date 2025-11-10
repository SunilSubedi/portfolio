import React from 'react'
import Profile1 from '../assets/images/profile1.png'
import { projects } from './Project'
import { saveAs } from 'file-saver'

function Content() {
  const saveResume = () => {
    const file = '/sunil-resume-it.pdf'
    saveAs(file, 'Sunil-Subedi-Resume.pdf')
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Hero / Header */}
      <section id="home" className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img src={Profile1} alt="Sunil Subedi" className="w-40 h-40 rounded-lg shadow-md object-cover" />
        <div className="flex-1 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900">Sunil Subedi</h1>
          <p className="text-gray-700 mt-2">Software Developer • BCA Graduate
          </p>
          <div className="mt-4 flex gap-3">
            <button onClick={saveResume} className="px-4 py-2 bg-indigo-700 text-white rounded">Download Resume</button>
            <a href="#contact" className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded">Contact</a>
          </div>
        </div>
      </section>

      

      {/* About */}
      <section id="about" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">About Me</h2>
        <p className="text-gray-700">Hi! Im Sunil Subedi, a passionate and driven Bachelor of Computer Application (BCA) graduate. I enjoy building web applications, learning new technologies, and solving problems with clean code. I focus on front-end development with React and modern JavaScript, and Im comfortable working across the full stack.</p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Full Stack Developer</h3>
                <p className="text-sm text-gray-600">Personal Projects</p>
              </div>
              <span className="text-sm text-gray-500">2015 — Present</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm">   Built responsive user interfaces using React and Tailwind CSS, and implemented backend features with Next.js, Node.js, and Prisma. Worked across the full stack—developing routing, APIs, data validation, and deployment pipelines. Used TypeScript for static typing to improve code quality and maintainability.
           </p>
          </div>
          
          <div className="p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Pabitra Distributors — Sales and Development</h3>
                <p className="text-sm text-gray-600">July 2018 – Nov 2021</p>
              </div>
              <span className="text-sm text-gray-500">Full-time</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
              <li>Delivered exceptional customer service and handled customer orders and inquiries.</li>
              <li>Managed stock, orders, and vendor communications, ensuring smooth day-to-day operations.</li>
              <li>Worked effectively in a fast-paced environment, meeting deadlines and reducing waste.</li>
              <li>Developed software to perform CRUD operations for customers, orders, and invoices.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Tempe Tyre — Tyre Fitter</h3>
                <p className="text-sm text-gray-600">Oct 2022 – Present</p>
              </div>
              <span className="text-sm text-gray-500">Part-time / Full-time</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
              <li>Provide excellent customer service and ensure customer satisfaction.</li>
              <li>Maintain a safe and clean working environment while following company guidelines.</li>
              <li>Manage inventory, including stock taking and applying FIFO methods.</li>
              <li>Communicate with suppliers and vendors for orders, invoices, and deliveries.</li>
              <li>Report to supervisors on issues and provide daily sales and service reports.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">Education</h2>
        <div className="p-4 bg-white rounded shadow-sm">
          <h3 className="font-bold">Bachelor of Computer Application (BCA)</h3>
          <p className="text-sm text-gray-600">University / Institute</p>
          <p className="text-gray-700 mt-2 text-sm">Graduated with a focus on software development, algorithms, and databases.</p>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow-sm flex gap-4 items-start">
            <div className="w-40 h-28 rounded overflow-hidden flex-shrink-0 shadow">
              <img src="/flask-api-certificate.jpeg" alt="Flask API Certificate" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold">REST APIs with Flask and Python — 2024</h3>
              <p className="text-sm text-gray-700 mt-1">What I learned:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                <li>Develop REST APIs with Flask and Python</li>
                <li>Implement CRUD operations using SQLAlchemy</li>
                <li>User authentication with Flask-JWT-Extended</li>
                <li>Deploy applications using Docker and Render.com</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow-sm flex gap-4 items-start">
            <div className="w-40 h-28 rounded overflow-hidden flex-shrink-0 shadow">
              <img src="/Python-Everybody.jpeg" alt="Python for Everybody Certificate" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold">Python for Everybody — 2024</h3>
              <p className="text-sm text-gray-700 mt-1">Skills learned:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                <li>Web Scraping</li>
                <li>Databases</li>
                <li>Web Services</li>
                <li>Computer Programming</li>
                <li>Data Processing</li>
                <li>Network Protocols</li>
                <li>Database Design, SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Node.js', 'Next.js','Vercel', 'Prisma', 'TypeScript', 'Zod', 'Python', 'Flask', 'Docker', 'AWS'].map((s) => (
            <span key={s} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="p-4 bg-white rounded shadow-sm">
              <h3 className="font-bold text-indigo-900">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
              <div className="mt-3 flex gap-4">
                {p.live && (
                  <a className="text-indigo-700 text-sm" href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                )}
                {p.repo && (
                  <a className="text-indigo-700 text-sm" href={p.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                )}
                {!p.live && !p.repo && (
                  <a className="text-indigo-700 text-sm" href="#">View</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-2">Contact</h2>
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="text-gray-700">Email: <a href="mailto:sunilsubedi9@gmail.com" className="text-indigo-700">sunilsubedi9@gmail.com</a></p>
          <p className="text-gray-700 mt-2">Phone: <span className="text-gray-700">+61-433435367</span></p>
        </div>
      </section>
    </main>
  )
}

export default Content