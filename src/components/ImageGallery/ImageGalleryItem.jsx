import { ImageIt, ImageGalleryItem_image } from './Image.styled';

const ImageItem = ({ url, tag }) => {
  return (
    <ImageIt>
      <ImageGalleryItem_image src={url} alt={tag} />
    </ImageIt>
  );
};

export default ImageItem;
