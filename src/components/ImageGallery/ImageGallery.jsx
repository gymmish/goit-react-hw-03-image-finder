import ImageItem from '../ImageGallery/ImageGalleryItem';
import { ImageGal } from './Image.styled';

export default function ImageGallery({ response }) {
  return (
    <ImageGal>
      {response.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageItem
          key={id}
          id={id}
          url={webformatURL}
          tag={tags}
          onImageClick={() => onImageClick(id, largeImageURL, tags)}
        />
      ))}
    </ImageGal>
  );
}

/* <h2 className="visually-hidden">Gallery</h2>
      <ul>
      <ImageItem
          key={id}
          id={id}
          url={url}
          tag={tags} />
      </ul>  </> */
