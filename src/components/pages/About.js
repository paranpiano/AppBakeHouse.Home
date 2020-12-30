import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/about.png';
import './Pages.css';

const About = () => {
  return (
    <ImageContents imageSrc={imagePath}>
      <div className="post">
        <h2>Who We Are</h2>
        <h4>
          We are a software development company, leader in IT consulting, custom software
          development, testing, and machine learing.
        </h4>
        <h2>Our Mission</h2>
        <h4>
          We seek to achieve extraordinary results by helping our clients make distinctive
          improvements.
        </h4>
      </div>
    </ImageContents>
  );
};

export default About;
