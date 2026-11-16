import { profile, experience, projects, skills, education, languages } from '../data/profile'
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
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
      <a href={`mailto:${email}`} aria-label="Email">
        <MailIcon />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
    </div>
  )
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <p className="eyebrow">
        {profile.role} · {profile.location}
      </p>
      <h1>{profile.name}</h1>
      <p className="lead">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">
          Get in touch
        </a>
        <a className="btn" href="#projects">
          View projects
        </a>
        <SocialLinks />
      </div>
      <dl className="stats">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}

export function About() {
  return (
    <Section id="about" title="About">
      <p className="prose">{profile.summary}</p>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="job">
            <div className="job-meta">
              <span className="period">{job.period}</span>
              <span className="muted">{job.location}</span>
            </div>
            <div>
              <h3>
                {job.role} ·{' '}
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
              </h3>
              <ul className="highlights">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Tags items={job.tags} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Tags items={project.tags} />
            <a className="card-link" href={project.url} target="_blank" rel="noreferrer">
              {project.linkLabel} <ArrowIcon />
            </a>
          </article>
        ))}
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
      <div className="two-col">
        <div>
          <h3>{education.degree}</h3>
          <p className="muted">
            {education.school} · {education.detail} · {education.year}
          </p>
        </div>
        <ul className="languages">
          {languages.map((lang) => (
            <li key={lang.name}>
              <strong>{lang.name}</strong> <span className="muted">{lang.level}</span>
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
      <div className="contact">
        <p className="prose">
          Open to new opportunities and interesting problems. The fastest way to reach me is email.
        </p>
        <a className="btn btn-primary" href={`mailto:${email}`}>
          {email}
        </a>
        <SocialLinks />
      </div>
    </Section>
  )
}
