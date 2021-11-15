import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/services.png';

const Services = () => {
  return (
    <ImageContents imageSrc={imagePath} imageText="Services">
      <div className="post">
        <h2>Mobile Apps</h2>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.appbakehouse.qr_scan_app">
            DONUT - AI QR SCAN
          </a>
        </h4>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.companyname.ui_thebestprice">
            BAGLE - AI WISH LIST
          </a>
        </h4>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.crossbim.mobileviewer">
            CROSSTEAM - FRONTEND DEVELOPMENT
          </a>
        </h4>
        <h4>
          <a href="">
            REVIEWNOTE - BACKEND DEVELOPMENT(TBD)
          </a>
        </h4>
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
