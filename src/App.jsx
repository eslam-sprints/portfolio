import { useEffect, useState } from 'react'
import { profile } from './data/profile'
import { MoonIcon, SunIcon } from './components/Icons'
import {
  About,
  Contact,
  Education,
  Experience,
  ProfileCard,
  Projects,
  Skills,
} from './components/Sections'

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

const YEAR = new Date().getFullYear()

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable — fall back to system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const SECTION_IDS = NAV.map(([id]) => id)

export default function App() {
  const [theme, setTheme] = useState(initialTheme)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className="layout">
      <button
        className="theme-toggle"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} mode`}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>

      <ProfileCard nav={NAV} active={active} />

      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <footer className="footer">
          © {YEAR} {profile.name} · Built with React & Vite, deployed on Vercel.
        </footer>
      </main>
    </div>
  )
}
