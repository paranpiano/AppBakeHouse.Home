import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/services.jpg';

const Services = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="Services">
      <div className="post">
        <h2>Mobile Apps</h2>
        <h2>Web Apps</h2>
        <h2>AI & ML</h2>
      </div>
    </ImageContents>
  );
};

export default Services;
