import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/portfolio.jpg';

const Portfolio = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="Portfolio">
      <div className="post">
        <h2>Mobile Apps Portfolio</h2>
        <h2>Web Apps Portfolio</h2>
        <h2>AI & ML Portfolio</h2>
      </div>
    </ImageContents>
  );
};

export default Portfolio;
