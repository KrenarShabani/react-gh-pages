import React from "react"

function AboutMe() {
  return (
    <div className="about">
      <p className="comment">{"// about.txt"}</p>
      <p>
        Hi, I'm <span className="accent">Krenar Shabani</span> — a{" "}
        <span className="accent">full-stack software engineer</span> with a
        passion for technology and building things that work. I've been writing
        programs since I was a teenager, and that early curiosity turned into a
        career.
      </p>
      <p>
        I work across the whole stack — from front-end interfaces in React to
        back-end logic and data — and I'm right at home on the{" "}
        <span className="accent">Linux</span> command line, where I do most of
        my development. Lately I've been{" "}
        <span className="accent">integrating AI and LLMs</span> into my projects,
        building features on top of modern models and APIs.
      </p>
      <p>
        I also enjoy taking a problem all the way down to its fundamentals — like
        my <span className="accent">Sudoku solver</span>, which started as a C++
        backtracking algorithm, grew a C# GUI, and now runs live in your browser
        on this site (check the <span className="accent">sudoku</span> tab).
      </p>
      <p>
        My hobbies include, but are not limited to, programming, game
        development, gaming, listening to music, and exploring new technologies.
        When I'm not writing code, you'll usually find me experimenting with new
        tools and frameworks or tinkering with a personal project.
      </p>

      <p className="comment" style={{ marginTop: "1.5rem" }}>
        {"// stack"}
      </p>
      <div className="skills">
        {[
          "C++",
          "C#",
          "Java",
          "JavaScript",
          "React",
          "Full-Stack",
          "Linux",
          "AI / LLMs",
          "HTML/CSS",
          "Unity",
        ].map((s) => (
          <span className="skill-tag" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AboutMe
