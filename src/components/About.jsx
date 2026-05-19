import React from 'react';

const stats = [
  { num: '5+', label: 'Years of experience' },
  { num: '5+', label: 'Projects shipped' },
  { num: '100%', label: 'Concept to launch' },
  { num: 3, label: 'sites' },
];

export default function About() {
  return (
    <section id="about" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 3rem' }}>
      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#ff5c35', marginBottom: '1rem' }}>
        About Me
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Text */}
        <div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Turning ideas into<br />real products
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#aaa', fontWeight: 300, marginBottom: '1rem' }}>
            I'm Amera R., a frontend and full stack developer with 5 years of experience building websites and web applications from concept to launch. I love creating clean, functional, and visually compelling digital experiences.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#aaa', fontWeight: 300 }}>
            From e-commerce platforms to biotech company sites, I bring a product mindset to every project — caring about both the code quality and the end-user experience.
          </p>
          <a
            href="https://github.com/citygirlsf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1.75rem',
              padding: '0.8rem 1.75rem',
              border: '1px solid #222',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#f0ede6',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#888'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            GitHub Profile ↗
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {stats.map(({ num, label }) => (
            <div key={label} style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '16px',
              padding: '1.5rem',
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#ff5c35',
                lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontSize: '0.75rem',
                color: '#666',
                marginTop: '0.4rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
