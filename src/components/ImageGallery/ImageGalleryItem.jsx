import { ImageIt, GalleryItemImage } from './Image.styled';

const ImageItem = ({ url, tag }) => {
  return (
    <ImageIt>
      <GalleryItemImage src={url} alt={tag} />
    </ImageIt>
  );
};

export default ImageItem;
