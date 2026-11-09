function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git & GitHub",
  ];

  return (
    <section className="about" id="about">
      <h1>About Me</h1>

      <p>
        Hi, I’m Tafakur. I have a Bachelor’s degree in Information Technology
        from Gezira College of Technology, which I completed in 2024.
      </p>

      <p>
        I enjoy learning by building projects, especially interactive websites
        and web applications. My current focus is frontend development, and
        I’m looking for an entry-level opportunity where I can keep learning,
        contribute, and grow.
      </p>

      <h2>Technologies I Use</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <a href="#projects">Explore My Projects</a>
    </section>
  );
}

export default About;