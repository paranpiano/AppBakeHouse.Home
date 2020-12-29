import About from './About';
import Client from './Client';
import Services from './Services';
import Portfolio from './Portfolio';

import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <br></br>
      <br></br>

      <Row>
        <Col>
          <About />
        </Col>
        <Col>
          <Client />
        </Col>
      </Row>
      <Row>
        <Col>
          <Services />
        </Col>
        <Col>
          <Portfolio />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
