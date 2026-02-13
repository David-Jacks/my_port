import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer__page">
      <div className="footer__divider"></div>
      <p>
        <span className="footer__copyright">&copy; {currentYear}</span>
        <span className="footer__separator">•</span>
        <span className="footer__credit">Developed by <strong>David Jackson</strong></span>
        <span className="footer__separator">•</span>
        <span className="footer__rights">All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
