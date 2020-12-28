import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/about.jpg';

const About = () => {
  return <ImageContents imageSrc={imagePath} imageText="About Us" />;
};

export default About;
