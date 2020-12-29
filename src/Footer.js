import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <Container>
        <div>
          <p>
            © <span class="year">2021</span> Seoul Korea , paranpiano@appbakehouse.com
          </p>
          <p>
            by{' '}
            <a
              href="https://www.linkedin.com/in/chajin-oh-3687a957/"
              title="Linkedin Profile"
              target="_blank"
              rel="noopener"
            >
              paranpiano
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
