import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8rem 3rem 4rem',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 'none',
    }}>
      {/* Background ghost text */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(6rem, 18vw, 18rem)',
        fontWeight: 800,
        color: 'transparent',
        WebkitTextStroke: '1px #1c1c1c',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>
        AMERA
      </div>

      {/* Available badge */}
      <div style={{
        ...fade(0.1),
        display: 'inline-block',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: '#ff5c35',
        border: '1px solid #ff5c35',
        padding: '0.3rem 0.85rem',
        borderRadius: '100px',
        marginBottom: '1.5rem',
        width: 'fit-content',
      }}>
        ● Available for work
      </div>

      <h1 style={{
        ...fade(0.25),
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        maxWidth: '900px',
        position: 'relative',
      }}>
        Frontend &amp; Full Stack{' '}
        <span style={{ color: '#ff5c35' }}>Developer</span>
      </h1>

      <p style={{
        ...fade(0.4),
        marginTop: '2rem',
        fontSize: '1.1rem',
        color: '#888',
        maxWidth: '520px',
        lineHeight: 1.75,
        fontWeight: 300,
        position: 'relative',
      }}>
        I build websites and applications from concept to launch — with 5 years of experience turning ideas into polished digital products.
      </p>

      <div style={{ ...fade(0.55), marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', position: 'relative' }}>
        <a
          href="#projects"
          onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            background: '#ff5c35', color: '#fff',
            padding: '0.85rem 2rem', borderRadius: '100px',
            fontSize: '0.9rem', fontWeight: 500,
            transition: 'background 0.2s, transform 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.background = '#e04825'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.target.style.background = '#ff5c35'; e.target.style.transform = 'translateY(0)'; }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            background: 'transparent', color: '#f0ede6',
            padding: '0.85rem 2rem', borderRadius: '100px',
            fontSize: '0.9rem', fontWeight: 500,
            border: '1px solid #222',
            transition: 'border-color 0.2s, transform 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.borderColor = '#888'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#222'; e.target.style.transform = 'translateY(0)'; }}
        >
          Get In Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div style={{
        ...fade(0.8),
        position: 'absolute',
        bottom: '2.5rem', left: '3rem',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        fontSize: '0.7rem', textTransform: 'uppercase',
        letterSpacing: '0.14em', color: '#444',
      }}>
        <span style={{ width: 40, height: 1, background: '#333', display: 'block' }} />
        Scroll to explore
      </div>
    </section>
  );
}
