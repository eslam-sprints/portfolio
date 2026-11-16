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
    // Active = last section whose top has passed 35% of the viewport; the last one once at page bottom.
    const update = () => {
      const { scrollHeight } = document.documentElement
      if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
        setActive(ids[ids.length - 1])
        return
      }
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
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
