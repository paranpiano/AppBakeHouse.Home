import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/about.jpg';
import './Pages.css';

const About = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="About Us">
      <div className="post">
        <h2>Who We Are</h2>
        <h2>Our Mission</h2>
      </div>
    </ImageContents>
  );
};

export default About;
