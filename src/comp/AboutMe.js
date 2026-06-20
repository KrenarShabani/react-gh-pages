import React from "react"

function AboutMe() {
  return (
    <div className="about">
      <p className="comment">{"// about.txt"}</p>
      <p>
        Hi, I'm <span className="accent">Krenar Shabani</span> — a software
        engineer with a passion for technology and building things that work.
        I've been writing programs since I was a teenager, and that early
        curiosity turned into a career.
      </p>
      <p>
        I enjoy taking a problem all the way down to its fundamentals — like my{" "}
        <span className="accent">Sudoku solver</span>, which started as a C++
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
        {["C++", "C#", "JavaScript", "React", "HTML/CSS", "Unity"].map((s) => (
          <span className="skill-tag" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AboutMe
