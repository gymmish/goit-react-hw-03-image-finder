import { ImageIt, GalleryItemImage } from './Image.styled';

const ImageItem = ({ url, tag, toggleModal, onImageClick }) => {
  return (
    <ImageIt>
      <GalleryItemImage
        src={url}
        alt={tag}
        onClick={() => {
          toggleModal();
          onImageClick();
        }}
      />
    </ImageIt>
  );
};

export default ImageItem;
