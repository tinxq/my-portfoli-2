export default function Home() {
  return (
    <section className="home" id="home">
      <div className="hero-text">
        <p className="intro">Hi, I'm Tafakur</p>

        <h1>
          Information Technology Graduate
          <span> &amp; Frontend Developer</span>
        </h1>
<a
  href="/assets/Tafakur.pdf"
  download="Tafakur-Tarig.pdf"
  className="button secondary-button"
>
  Download My CV
</a>
        <p className="description">
          I create interactive web projects using HTML, CSS, JavaScript, and React.
          I’m currently looking for opportunities to grow my skills and gain
          hands-on experience.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary-button">
            View My Projects
          </a>

          <a href="#contact" className="button secondary-button">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/assets/ENFP.JPG" alt="Tafakur" className="avatar" />
      </div>
    </section>
  );
}