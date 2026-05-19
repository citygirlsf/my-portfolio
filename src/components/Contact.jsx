import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) return;
  await fetch('https://formspree.io/f/meedorvg', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSent(true);
};


//meedorvg

  const inputStyle = {
    width: '100%',
    padding: '0.9rem 1.25rem',
    borderRadius: '12px',
    border: 'none',
    background: 'rgba(255,255,255,0.14)',
    color: '#fff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
  };

  return (
    <div id="contact" style={{ padding: '0 3rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        background: '#ff5c35',
        borderRadius: '24px',
        padding: '4rem 3rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem' }}>
          Get In Touch
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: '0.75rem',
        }}>
          Let's work together
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2.5rem' }}>
          Have a project in mind? I'd love to hear about it.
        </p>

        {sent ? (
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '520px',
            margin: '0 auto',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 500,
          }}>
            ✓ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '520px', margin: '0 auto', textAlign: 'left' }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={handleSubmit}
                style={{
                  background: '#fff',
                  color: '#ff5c35',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'transform 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#ffe0d8'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#fff'; }}
              >
                Send Message ↗
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
