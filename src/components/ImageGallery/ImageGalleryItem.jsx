const ImageItem = ({ url, tag }) => {
  return (
    <li>
      <img src={url} alt={tag} />
    </li>
  );
};

export default ImageItem;
