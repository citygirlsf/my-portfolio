import React from "react";

const stats = [
  { num: "7+", label: "Years of experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "3", label: "Client Websites" },
  { num: "1", label: "Enterprise application" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 3rem" }}
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
        About Me
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Turning ideas into
            <br />
            real products
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#aaa",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            I'm Amera R., a full-stack developer with 7 years of professional
            web development experience. I build and maintain web applications
            using React, TypeScript, JavaScript, Node.js, REST APIs, and
            PostgreSQL.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#aaa",
              fontWeight: 300,
            }}
          >
            I currently work on an enterprise project management application,
            building frontend features, backend functionality, database
            operations, and bug fixes. I enjoy solving technical problems,
            learning new technologies, and turning product requirements into
            reliable working features.
          </p>
          <a
            href="https://github.com/citygirlsf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1.75rem",
              padding: "0.8rem 1.75rem",
              border: "1px solid #222",
              borderRadius: "100px",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#f0ede6",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#888";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#222";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            GitHub Profile ↗
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {stats.map(({ num, label }) => (
            <div
              key={label}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#a11184",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#666",
                  marginTop: "0.4rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
