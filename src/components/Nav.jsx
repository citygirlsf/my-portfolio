import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.2rem 3rem',
    background: 'rgba(10,10,10,0.88)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1a1a1a',
    transition: 'background 0.3s',
  },
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.3rem',
    letterSpacing: '-0.02em',
    color: '#f0ede6',
  },
  logoAccent: { color: '#ff5c35' },
  links: {
    display: 'flex', gap: '2rem', listStyle: 'none',
  },
  link: {
    color: '#888',
    fontSize: '0.8rem',
    fontWeight: 400,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{ ...styles.nav, background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.6)' }}>
      <div style={styles.logo}>
        A<span style={styles.logoAccent}>.</span>R
      </div>
      <ul style={styles.links}>
        {['about', 'skills', 'projects', 'contact'].map((s) => (
          <li key={s}>
            <span
              style={styles.link}
              onClick={() => scrollTo(s)}
              onMouseEnter={e => e.target.style.color = '#f0ede6'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >
              {s}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
