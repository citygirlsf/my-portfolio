import React, { useState } from 'react';

const projects = [
  {
    num: '01',
    title: 'Cool Spot Shop',
    desc: 'A branded website for a frozen yogurt store — vibrant, mobile-friendly, and designed to drive foot traffic and delight customers online.',
    tags: ['Web Design', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/citygirlsf',
    live: 'https://coolspotshop.com',
  },
  {
    num: '02',
    title: 'Bio-Rad',
    desc: 'Web development work for Bio-Rad, a global leader in life science research and clinical diagnostics — building performant, accessible pages.',
    tags: ['Full Stack', 'React', 'REST API', 'Enterprise'],
    github: 'https://github.com/citygirlsf',
    live: 'https://bio-rad.com',
  },
  {
    num: '03',
    title: 'Circle Saver',
    desc: 'A full e-commerce platform — featuring product listings, cart functionality, and a smooth checkout experience built from the ground up.',
    tags: ['E-commerce', 'React', 'REST API', 'Full Stack'],
    github: 'https://github.com/citygirlsf',
    live: null,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 6rem' }}>
      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#ff5c35', marginBottom: '1rem' }}>
        Selected Work
      </div>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '2.5rem',
      }}>
        Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {projects.map((p) => (
          <div
            key={p.num}
            onMouseEnter={() => setHovered(p.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: '#111',
              border: `1px solid ${hovered === p.num ? '#2a2a2a' : '#1a1a1a'}`,
              borderRadius: '20px',
              padding: '2rem',
              transition: 'border-color 0.2s, transform 0.2s',
              transform: hovered === p.num ? 'translateY(-5px)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent bar */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '3px',
              background: '#ff5c35',
              transform: `scaleX(${hovered === p.num ? 1 : 0})`,
              transformOrigin: 'left',
              transition: 'transform 0.35s ease',
            }} />

            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.75rem',
              color: '#ff5c35',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              {p.num}
            </div>

            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}>
              {p.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.75, fontWeight: 300 }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.72rem',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '100px',
                  background: '#161616',
                  color: '#666',
                  border: '1px solid #222',
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem' }}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.82rem', color: '#888', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ff5c35'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}
              >
                GitHub ↗
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.82rem', color: '#ff5c35', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffcf00'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ff5c35'}
                >
                  Live Site ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
