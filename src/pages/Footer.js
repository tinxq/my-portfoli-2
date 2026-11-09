function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Tafakur Tarig. All rights reserved.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default Footer;