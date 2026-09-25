import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1a1a1a',
      padding: '2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#555',
      fontSize: '0.8rem',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span>© 2025 Amera R. — All rights reserved.</span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a
          href="https://github.com/citygirlsf"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#555', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          GitHub ↗
        </a>
        <a
          href="https://coolspotshop.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#555', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          Cool Spot Shop ↗
        </a>
        <a
          href="https://bio-rad.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#555', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          Bio-Rad ↗
        </a>
      </div>
    </footer>
  );
}
