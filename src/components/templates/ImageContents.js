import './ImageContents.css';

const ImageContents = (props) => {
  const {
    imageSrc,
    children, // <ImageContents> children </ImageContents>
  } = props;

  return (
    <div className="image-contents">
      <img className="title-image" src={imageSrc} />
      <div className="contents">{children}</div>
    </div>
  );
};

export default ImageContents;
