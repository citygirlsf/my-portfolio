import React, { useState } from "react";

const skills = [
  { name: "React", featured: true },
  { name: "JavaScript", featured: true },
  { name: "TypeScript", featured: true },
  { name: "Node.js", featured: true },
  { name: "PostgreSQL", featured: true },
  { name: "REST APIs", featured: true },
  { name: "HTML5", featured: false },
  { name: "CSS3", featured: false },
  { name: "E-commerce", featured: false },
  { name: "Responsive Development", featured: false },
  { name: "Git / GitHub", featured: false },
  { name: "Web Performance", featured: false },
  { name: "Full-Stack Development", featured: false },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      id="skills"
      style={{ padding: "0 3rem 6rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div
        style={{
          background: "#111",
          borderRadius: "24px",
          padding: "3rem",
          border: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#a11184",
            marginBottom: "0.75rem",
          }}
        >
          What I Work With
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          Skills &amp; Technologies
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {skills.map(({ name, featured }) => (
            <span
              key={name}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontSize: "0.875rem",
                fontWeight: 400,
                padding: "0.55rem 1.25rem",
                borderRadius: "100px",
                cursor: "default",
                transition: "all 0.2s",
                background: featured
                  ? "#a11184"
                  : hovered === name
                    ? "#1a1a1a"
                    : "#161616",
                border: featured
                  ? "1px solid #a11184"
                  : `1px solid ${hovered === name ? "#a11184" : "#222"}`,
                color: featured
                  ? "#fff"
                  : hovered === name
                    ? "#a11184"
                    : "#aaa",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
