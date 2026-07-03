import { useState } from "react";

const STACK = ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"];

const STATS = [
  { num: "1+", label: "Year of coding" },
  { num: "12", label: "GitHub repositories" },
  { num: "3", label: "Full-stack projects" },
];

const PROJECTS = [
  {
    name: "ShopApp",
    desc: "A full-stack e-commerce app with product listings, cart, and checkout. Built with React, Express, and MongoDB.",
    lang: "JavaScript",
    tags: ["React", "MongoDB"],
    emoji: "🛒",
  },
  {
    name: "TaskFlow",
    desc: "A task management app with user auth, drag-and-drop boards, and deadline reminders. My first MERN project.",
    lang: "JavaScript",
    tags: ["Node.js", "Express"],
    emoji: "✅",
  },
  {
    name: "WeatherNow",
    desc: "A weather dashboard using the OpenWeather API. Displays forecasts, wind, and humidity with a clean UI.",
    lang: "JavaScript",
    tags: ["React", "API"],
    emoji: "🌤",
  },
];

const CONTACT = [
  {
    label: "Email",
    text: "hardiksigdel361@gmail.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    text: "+977 9764286240",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Location",
    text: "Kathmandu, Nepal",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    text: "github.com/hardik",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

function ArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-[#0d1117] text-[#e6edf3] min-h-screen font-sans text-[15px] leading-relaxed px-16">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-[18px] border-b border-[#21262d] sticky top-0 bg-[#0d1117]/95 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2 text-[16px] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#58a6ff] inline-block" />
          hardik.dev
        </div>

       <ul className="flex gap-6 list-none">
  {["About", "Projects", "Contact"].map((link) => (
    <li key={link}>
      <a
        href={`#${link.toLowerCase()}`}
        className="text-[13px] text-[#8b949e] hover:text-[#e6edf3] transition-colors"
      >
        {link}
      </a>
    </li>
  ))}
</ul>
        <div className="flex items-center gap-1.5 text-[12px] text-[#3fb950] bg-[#3fb950]/10 border border-[#3fb950]/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse inline-block" />
          Open to work
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-[72px] max-w-[700px]">
        <div className="flex items-center gap-2 text-[12px] tracking-widest uppercase text-[#58a6ff] mb-4">
          <span className="block w-5 h-px bg-[#58a6ff]" />
          Junior developer · Kathmandu, Nepal
        </div>
        <h1 className="text-[42px] font-medium leading-tight text-[#e6edf3] mb-2">
          Hi, I'm <span className="text-[#58a6ff]">Hardik Sigdel</span>
        </h1>
        <p className="text-[18px] text-[#8b949e] mb-5">MERN Stack Developer</p>
        <p className="text-[15px] text-[#8b949e] max-w-[500px] leading-[1.7] mb-7">
          I build modern, fast, and responsive web applications. Currently leveling up my skills
          in React and Node.js while working on personal projects and open source contributions.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-1.5 bg-[#1f6feb] hover:bg-[#388bfd] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors cursor-pointer border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            View projects
          </button>
  
          <a
  href="mailto:hardikksigdel361@gmail.com"
  className="flex items-center gap-1.5 bg-transparent hover:bg-[#161b22] text-[#c9d1d9] border border-[#30363d] hover:border-[#58a6ff] px-5 py-2.5 rounded-lg text-[14px] transition-colors cursor-pointer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
    />
  </svg>
  Get in touch
</a>
        </div>
      </section>

      {/* Tech Stack */}
      <div className="px-8 pt-6 pb-12 flex items-center gap-2.5 flex-wrap">
        <span className="text-[12px] text-[#6e7681] mr-1">Stack</span>
        {STACK.map((tech) => (
          <span key={tech} className="text-[12px] px-2.5 py-1 rounded-full bg-[#161b22] border border-[#21262d] text-[#8b949e]">
            {tech}
          </span>
        ))}
      </div>

      {/* About */}
      <section id="about" className="px-8 py-12 border-t border-[#21262d]">
        <h2 className="text-[20px] font-medium text-[#e6edf3] mb-8">About me</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-[14px] text-[#8b949e] leading-[1.8] flex flex-col gap-3">
            <p>
              I'm a junior developer passionate about building things for the web.
              I got into programming through YouTube tutorials and haven't stopped
              since — there's always something new to learn.
            </p>
            <p>
              I enjoy working on the full stack, from designing clean UIs in React to
              setting up REST APIs with Express and MongoDB. I'm currently exploring
              TypeScript and getting more comfortable with Git workflows.
            </p>
            <p>
              When I'm not coding, I'm usually reading about system design or working
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3.5 bg-[#161b22] border border-[#21262d] rounded-[10px] px-5 py-4">
                <div>
                  <div className="text-[22px] font-medium text-[#e6edf3] leading-none">{s.num}</div>
                  <div className="text-[12px] text-[#6e7681] mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-12 border-t border-[#21262d]">
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="text-[20px] font-medium text-[#e6edf3]">Projects</h2>
          <span className="text-[12px] text-[#6e7681] bg-[#161b22] border border-[#21262d] px-2 py-0.5 rounded-full">3 repos</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`bg-[#161b22] border rounded-[10px] p-5 cursor-pointer flex flex-col gap-2.5 transition-colors ${
                hovered === p.name ? "border-[#388bfd]" : "border-[#21262d]"
              }`}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-between items-start">
                <span className="text-[22px] leading-none">{p.emoji}</span>
                <span className="text-[#6e7681]"><ArrowUpRight /></span>
              </div>
              <div className="text-[15px] font-medium text-[#e6edf3]">{p.name}</div>
              <div className="text-[13px] text-[#6e7681] leading-[1.6] flex-1">{p.desc}</div>
              <div className="flex gap-1.5 flex-wrap items-center mt-1">
                <span className="flex items-center gap-1 text-[12px] text-[#6e7681]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f7df1e] inline-block" />
                  {p.lang}
                </span>
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-[#0d1117] border border-[#21262d] text-[#8b949e]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-12 border-t border-[#21262d]">
        <h2 className="text-[20px] font-medium text-[#e6edf3] mb-8">Contact</h2>
        <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-8 grid grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-[20px] font-medium text-[#e6edf3] mb-2">Let's work together</h3>
            <p className="text-[14px] text-[#6e7681] leading-[1.7]">
              I'm looking for junior developer roles or internship opportunities. I'm also happy
              to collaborate on open source projects or freelance work.
            </p>
            <button className="flex items-center gap-1.5 mt-5 bg-[#1f6feb] hover:bg-[#388bfd] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors cursor-pointer border-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
              Email me
            </button>
          </div>
          <div className="flex flex-col gap-3.5">
            {CONTACT.map((c) => (
              <div key={c.text} className="flex items-center gap-2.5 text-[13px] text-[#8b949e]">
                <span className="text-[#58a6ff] w-5 flex-shrink-0">{c.svg}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-[#21262d] flex justify-between items-center text-[12px] text-[#6e7681]">
        <span>© 2026 Hardik Sigdel</span>
        <span>Built with React + Tailwind CSS</span>
      </footer>
    </div>)}