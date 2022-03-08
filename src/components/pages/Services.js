import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/services.png';

const Services = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="Services">
      <div className="post">
        <h2>Mobile Apps</h2>
        <h3>- Android</h3>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            DONUT - QR SCAN
          </a>
        </h4>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.companyname.ui_thebestprice">
            BAGLE - AI WISH LIST
          </a>
        </h4>
        <h3>- iPhone</h3>

        <h2>Web Apps</h2>
        <h4>
          {/* <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            Airbnb - booking data
          </a> */}
        </h4>

        <h2>Machine Learning Services</h2>
        <h4>
          {/* <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            QR Prediction Service
          </a> */}
        </h4>
      </div>
    </ImageContents>
  );
};

export default Services;
