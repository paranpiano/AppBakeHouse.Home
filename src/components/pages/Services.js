import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/services.png';

const Services = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="Services">
      <div className="post">
        <h2>Mobile Apps</h2>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            QR & Scanner on map
          </a>
        </h4>
        <h2>Web Apps</h2>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            Airbnb - booking data
          </a>
        </h4>

        <h2>Machine Learning Services</h2>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            QR Predtion Service
          </a>
        </h4>
      </div>
    </ImageContents>
  );
};

export default Services;
