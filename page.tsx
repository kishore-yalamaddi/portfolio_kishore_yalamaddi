import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Sidebar */}
          <aside className="rounded-xl bg-zinc-900 p-6 space-y-6">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20110211-RoTwARBC5aXaFs9R1fV5kIBkTlQc5U.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="mt-4 text-2xl font-bold">Your Name</h1>
              <p className="text-zinc-400">Computer Science Engineer</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">EMAIL</p>
                  <p className="text-sm">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">PHONE</p>
                  <p className="text-sm">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-zinc-400">LOCATION</p>
                  <p className="text-sm">Your Location</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            <nav className="flex gap-6 text-zinc-400">
              <Link href="#about" className="hover:text-amber-500">
                About
              </Link>
              <Link href="#resume" className="hover:text-amber-500">
                Resume
              </Link>
              <Link href="#portfolio" className="hover:text-amber-500">
                Portfolio
              </Link>
              <Link href="#blog" className="hover:text-amber-500">
                Blog
              </Link>
              <Link href="#contact" className="hover:text-amber-500">
                Contact
              </Link>
            </nav>

            <section id="about">
              <h2 className="text-3xl font-bold mb-6">
                About Me
                <div className="h-1 w-12 bg-amber-500 mt-2"></div>
              </h2>
              <p className="text-zinc-400 mb-6">
                A passionate Computer Science Engineer with expertise in software development, algorithms, and
                problem-solving. Experienced in building robust applications and implementing efficient solutions.
                Committed to continuous learning and staying current with emerging technologies.
              </p>
            </section>

            <section id="services">
              <h2 className="text-3xl font-bold mb-6">
                What I'm Doing
                <div className="h-1 w-12 bg-amber-500 mt-2"></div>
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-zinc-900 p-6">
                  <div className="mb-4 inline-block rounded-lg bg-amber-500/10 p-3">
                    <div className="h-8 w-8 text-amber-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p className="text-zinc-400">
                    Building efficient and scalable applications using modern technologies and best practices.
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-900 p-6">
                  <div className="mb-4 inline-block rounded-lg bg-amber-500/10 p-3">
                    <div className="h-8 w-8 text-amber-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-zinc-400">
                    Creating responsive and modern web applications with cutting-edge frameworks.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

