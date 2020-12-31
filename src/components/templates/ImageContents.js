import './ImageContents.css';

const ImageContents = (props) => {
  const { imageSrc, children } = props;

  return (
    <div className="contents">
      <div className="image-bg-area">
        <img src={imageSrc} />
      </div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default ImageContents;
