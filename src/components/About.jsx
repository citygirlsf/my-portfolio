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
            Full-Stack Software Engineer with 7 years of experience building and
            delivering web applications using React, TypeScript, JavaScript,
            Node.js, and PostgreSQL. Experienced in developing end-to-end
            solutions, from responsive frontend interfaces to backend APIs,
            database operations, and secure authentication. Recently built and
            shipped a receipt organizer featuring secure user accounts, photo
            uploads, and user-specific data access. Open to frontend and
            full-stack engineering opportunities across the San Francisco Bay
            Area.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#aaa",
              fontWeight: 300,
            }}
          >
            Currently contributing to an enterprise project management
            application, developing frontend features, implementing backend
            functionality, managing database operations, and resolving technical
            issues. Experienced in translating product requirements into
            functional, reliable features while improving application
            performance and usability. I enjoy tackling complex technical
            challenges, writing maintainable code, and continuously expanding my
            skills across the full-stack development lifecycle.
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
