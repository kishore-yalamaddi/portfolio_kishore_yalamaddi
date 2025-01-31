"use client"

import { Mail, Phone, MapPin, Linkedin, Github, BookOpen, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Sidebar */}
          <aside className="rounded-xl bg-zinc-900 p-6 space-y-6 h-fit sticky top-8">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/142731719.jpg-cUmd1KvW2npfwwY2b7HqwL3tLLCf7L.jpeg"
                    alt="Kishore Yalamaddi"
                    width={128}
                    height={128}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="mt-4 text-2xl font-bold">Kishore Yalamaddi</h1>
              <p className="text-zinc-400">Software Developer</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">EMAIL</p>
                  <p className="text-sm">kishore.padmasali02@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">PHONE</p>
                  <p className="text-sm">+91 9177271612</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">LOCATION</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/kishore-yalamaddi-8a5919278/" className="text-zinc-400 hover:text-amber-500">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/kishore-yalamaddi" className="text-zinc-400 hover:text-amber-500">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            <nav className="flex gap-6 text-zinc-400">
              {["about", "resume", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-amber-500 ${activeSection === section ? "text-amber-500" : ""}`}
                >
                  {section}
                </button>
              ))}
            </nav>

            {activeSection === "about" && (
              <section id="about">
                <h2 className="text-3xl font-bold mb-6">
                  About Me
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h2>
                <p className="text-zinc-400 mb-6">
                  Aspiring Software Developer with expertise in full-stack web development and machine learning.
                  Proficient in React.js, Python, and backend technologies, seeking opportunities to apply my skills in
                  real-world projects.
                </p>

                <h3 className="text-2xl font-bold mb-6 mt-12">
                  What I&apos;m Doing
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceCard
                    title="Web Development"
                    description="Building modern web applications using React.js, Node.js, and other cutting-edge technologies."
                    icon={<BookOpen className="h-8 w-8" />}
                  />
                  <ServiceCard
                    title="Machine Learning"
                    description="Developing and implementing ML models for real-world applications and data analysis."
                    icon={<BookOpen className="h-8 w-8" />}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-6 mt-12">
                  Skills
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <SkillCategory title="Programming Languages" skills={["Python", "Java"]} />
                  <SkillCategory
                    title="Libraries/Frameworks"
                    skills={["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express Js"]}
                  />
                  <SkillCategory title="Tools/Platforms" skills={["Git", "VS Code"]} />
                  <SkillCategory title="Databases" skills={["SQL", "MongoDB"]} />
                </div>
              </section>
            )}

            {activeSection === "resume" && (
              <section id="resume">
                <h2 className="text-3xl font-bold mb-6">
                  Resume
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h2>

                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <GraduationCap className="h-6 w-6 text-amber-500" />
                      <h3 className="text-xl font-bold">Education</h3>
                    </div>
                    <div className="space-y-6">
                      <TimelineItem
                        title="PSCMR College of Engineering and Technology"
                        subtitle="B.Tech., CSE"
                        date="2022 - 2025"
                        description="CGPA: 7.75"
                      />
                      <TimelineItem
                        title="Srivani Group of Institutions"
                        subtitle="Diploma, Mechanical Engineering"
                        date="2018 - 2021"
                        description="Score: 70"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Briefcase className="h-6 w-6 text-amber-500" />
                      <h3 className="text-xl font-bold">Experience</h3>
                    </div>
                    <div className="space-y-6">
                      <TimelineItem
                        title="Next24tech"
                        subtitle="React.js Development Intern"
                        date="March 2024 - May 2024"
                        description={`
                          • Designed and implemented front-end using React.js
                          • Utilized state management libraries
                          • Integrated RESTful APIs
                          • Implemented authentication and authorization
                        `}
                      />
                      <TimelineItem
                        title="Codegnan"
                        subtitle="Machine Learning Intern"
                        date="May 2023 - July 2023"
                        description={`
                          • Conducted exploratory data analysis
                          • Executed feature engineering
                          • Developed and validated ML models
                          • Deployed models with CI/CD processes
                        `}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "portfolio" && (
              <section id="portfolio">
                <h2 className="text-3xl font-bold mb-6">
                  Projects
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <ProjectCard
                    title="MERN Stack Food Delivery App"
                    description="A full-stack food delivery web app with user authentication and admin dashboard."
                    technologies={["React.js", "Redux", "Node.js", "MongoDB"]}
                  />
                  <ProjectCard
                    title="Article Summarizer"
                    description="Web app integrating NLP APIs for real-time article summarization."
                    technologies={["React.js", "Node.js", "MongoDB", "NLP APIs"]}
                  />
                </div>
              </section>
            )}

            {activeSection === "contact" && (
              <section id="contact">
                <h2 className="text-3xl font-bold mb-6">
                  Contact
                  <div className="h-1 w-12 bg-amber-500 mt-2"></div>
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-zinc-900 p-6">
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-zinc-400 mb-4">
                      Feel free to reach out for collaborations or just a friendly hello
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-amber-500" />
                        <p>kishore.padmasali02@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <p>+91 9177271612</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-amber-500" />
                        <Link href="https://linkedin.com/in/kishore" className="hover:text-amber-500">
                          linkedin.com/in/kishore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <div className="mb-4 inline-block rounded-lg bg-amber-500/10 p-3">
        <div className="text-amber-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-500">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  title,
  subtitle,
  date,
  description,
}: {
  title: string
  subtitle: string
  date: string
  description: string
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <h4 className="font-bold">{title}</h4>
      <p className="text-amber-500">{subtitle}</p>
      <p className="text-sm text-zinc-400 mt-1">{date}</p>
      <div className="mt-2 text-zinc-400 whitespace-pre-line">{description}</div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
}: {
  title: string
  description: string
  technologies: string[]
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-500">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

