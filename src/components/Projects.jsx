import React, { useState } from "react";

const projects = [
  {
    num: "01",
    title: "Bookmark App",
    desc: "A React and TypeScript application for organizing and managing bookmarks. Built with reusable components and interactive functionality while using AI-assisted development tools for research, debugging, and problem-solving.",
    tags: ["React", "TypeScript", "JavaScript"],
    github: null,
    live: "https://bookmarkmanagermm.netlify.app/",
  },
  {
    num: "02",
    title: "Circle Saver",
    desc: "An e-commerce application built from the ground up, featuring product listings, shopping cart functionality, and an interactive shopping experience.",
    tags: ["E-commerce", "JavaScript", "CSS", "Full Stack"],
    github: "https://github.com/citygirlsf/circle-saver.git",
    live: null,
  },
  {
    num: "03",
    title: "Bio-Rad",
    desc: "Web development work supporting an enterprise life sciences website. Developed and maintained responsive pages, optimized content and images, and resolved broken links, buttons, and layout issues.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "Enterprise"],
    github: null,
  },
  {
    num: "04",
    title: "Cool Spot Shop",
    desc: "A responsive website for a frozen yogurt business, built with HTML, CSS, and JavaScript with a focus on mobile-friendly layouts and interactive functionality.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    github: null,
    live: "https://coolspotshop.com",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem 6rem" }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#a11184",
          marginBottom: "1rem",
        }}
      >
        Selected Work
      </div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "2.5rem",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.num}
            onMouseEnter={() => setHovered(p.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "#111",
              border: `1px solid ${hovered === p.num ? "#2a2a2a" : "#1a1a1a"}`,
              borderRadius: "20px",
              padding: "2rem",
              transition: "border-color 0.2s, transform 0.2s",
              transform:
                hovered === p.num ? "translateY(-5px)" : "translateY(0)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "#a11184",
                transform: `scaleX(${hovered === p.num ? 1 : 0})`,
                transformOrigin: "left",
                transition: "transform 0.35s ease",
              }}
            />

            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.75rem",
                color: "#a11184",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              {p.num}
            </div>

            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#777",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              {p.desc}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1.25rem",
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.25rem 0.7rem",
                    borderRadius: "100px",
                    background: "#161616",
                    color: "#666",
                    border: "1px solid #222",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div
              style={{ display: "flex", gap: "1.25rem", marginTop: "1.5rem" }}
            >
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "0.82rem",
                  color: "#888",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a11184")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                GitHub ↗
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.82rem",
                    color: "#a11184",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffcf00")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a11184")
                  }
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
