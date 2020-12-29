import './ImageContents.css';

const ImageContents = (props) => {
  const {
    imageSrc,
    imageText,
    children, // <ImageContents> children </ImageContents>
  } = props;

  const styles = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className="image-contents">
      <div className="image-bg-area" style={styles}>
        {/* {imageText} */}
      </div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default ImageContents;
