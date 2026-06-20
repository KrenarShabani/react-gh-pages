import React from "react"

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/KrenarShabani",
    href: "https://github.com/KrenarShabani",
  },
  {
    label: "Email",
    value: "KrenarShabani@gmail.com",
    href: "mailto:KrenarShabani@gmail.com",
  },
]

function Contact() {
  return (
    <div className="contact">
      <p className="comment">{"// contact — let's talk"}</p>
      <p>
        I'm open to software engineering opportunities. The fastest way to reach
        me:
      </p>
      <div className="contact-links">
        {LINKS.map((l) => (
          <a
            key={l.label}
            className="contact-row"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">{l.label}</span>
            <span className="contact-value">{l.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
