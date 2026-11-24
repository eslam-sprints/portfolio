import { useState } from 'react'
import { profile, experience, projects, skills, education, languages } from '../data/profile'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons'

const VISIBLE_HIGHLIGHTS = 3

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-label={title}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

export function SocialLinks() {
  const { email, linkedin, github } = profile.links
  return (
    <div className="socials">
      <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href={`mailto:${email}`} aria-label="Email">
        <MailIcon />
      </a>
    </div>
  )
}

export function ProfileCard({ nav, active }) {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className="profile">
      <div className="profile-top">
        {profile.photo ? (
          <img className="avatar" src={profile.photo} alt={`Photo of ${profile.name}`} width="88" height="88" />
        ) : (
          <div className="avatar" aria-hidden="true">
            {initials}
          </div>
        )}
        {profile.available && (
          <span className="badge">
            <span className="dot" /> Open to opportunities
          </span>
        )}
      </div>

      <h1>{profile.name}</h1>
      <p className="title">{profile.role}</p>
      <p className="location">
        <PinIcon /> {profile.location}
      </p>
      <p className="tagline">{profile.tagline}</p>

      <div className="cta">
        <a className="btn btn-primary" href={profile.cv} download>
          <DownloadIcon /> Download CV
        </a>
        <a className="btn" href={`mailto:${profile.links.email}`}>
          Contact me
        </a>
      </div>

      <nav className="side-nav" aria-label="Sections">
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>
            <span className="line" />
            {label}
          </a>
        ))}
      </nav>

      <SocialLinks />
    </header>
  )
}

export function About() {
  return (
    <Section id="about" title="About">
      <p className="prose">{profile.summary}</p>
      <dl className="stats">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <dl className="facts">
        {profile.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

function Job({ job }) {
  const [expanded, setExpanded] = useState(false)
  const hidden = job.highlights.length - VISIBLE_HIGHLIGHTS
  const shown = expanded ? job.highlights : job.highlights.slice(0, VISIBLE_HIGHLIGHTS)

  return (
    <li className="job card">
      <p className="period">{job.period}</p>
      <div>
        <h3>
          {job.role} ·{' '}
          <a href={job.url} target="_blank" rel="noreferrer">
            {job.company} <ArrowIcon />
          </a>
        </h3>
        <p className="job-location">{job.location}</p>
        <ul className="highlights">
          {shown.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {hidden > 0 && (
          <button className="more" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? 'Show less' : `Show ${hidden} more`}
          </button>
        )}
        <Tags items={job.tags} />
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="jobs">
        {experience.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </ol>
      <a className="text-link" href={profile.cv} target="_blank" rel="noreferrer">
        View full résumé <ArrowIcon />
      </a>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {projects.map((project) => {
          const content = (
            <>
              <h3>
                {project.title} {project.url && <ArrowIcon />}
              </h3>
              <p>{project.description}</p>
              <Tags items={project.tags} />
              <span className="project-link">{project.linkLabel}</span>
            </>
          )
          // Projects without a public link (private repo, unreleased app) render as a plain card.
          return project.url ? (
            <a key={project.title} className="project card" href={project.url} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            <article key={project.title} className="project card no-link">
              {content}
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.group}>
            <h3>{group.group}</h3>
            <Tags items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education & Languages">
      <div className="edu card">
        <div>
          <h3>{education.degree}</h3>
          <p className="muted">
            {education.school} · {education.detail} · Class of {education.year}
          </p>
        </div>
        <ul className="languages">
          {languages.map((lang) => (
            <li key={lang.name}>
              <strong>{lang.name}</strong> <span className="muted">· {lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Contact() {
  const { email } = profile.links
  return (
    <Section id="contact" title="Contact">
      <div className="contact card">
        <h3>Let’s work together</h3>
        <p className="muted">
          I’m open to new roles and interesting problems. Email is the fastest way to reach me — I usually reply
          within a day.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href={`mailto:${email}`}>
            <MailIcon /> {email}
          </a>
          <a className="btn" href={profile.cv} download>
            <DownloadIcon /> Download CV
          </a>
        </div>
      </div>
    </Section>
  )
}
