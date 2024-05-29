import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3 className="footer-title">Movie Theatre</h3>
          <ul className="footer-theatres">
            <li>
              <a href="#">爆米花影城</a>
            </li>
            <li>
              <a href="#">吉拿棒影城</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/cinemas">Cinemas</a>
            </li>
            <li>
              <a href="/member">Member Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
