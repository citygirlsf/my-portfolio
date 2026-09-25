import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meedorvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1.25rem",
    borderRadius: "12px",
    border: "none",
    background: "rgba(255, 255, 255, 0.94)",
    color: "#222",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 1.5rem",
        background: "#722362",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            marginBottom: "1rem",
          }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            color: "#ffe0d8",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Have a project or opportunity you'd like to discuss? Send me a
          message.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "#fff",
              color: "#cf1dab",
              fontWeight: 700,
              fontSize: "0.92rem",
              padding: "0.85rem 2rem",
              borderRadius: "100px",
              border: "none",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "transform 0.2s, background 0.2s",
              opacity: status === "sending" ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (status !== "sending") {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "#ffe0d8";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#fff";
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message ↗"}
          </button>

          {status === "success" && (
            <p
              style={{
                color: "#ffe0d8",
                marginTop: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ✓ Thanks! Your message has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p
              style={{
                color: "#fff",
                marginTop: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
