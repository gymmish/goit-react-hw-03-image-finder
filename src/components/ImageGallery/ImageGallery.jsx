import ImageItem from '../ImageGallery/ImageGalleryItem';
import { ImageGal } from './Image.styled';

export default function ImageGallery({ response }) {
  return (
    <ImageGal>
      {response.map(({ id, webformatURL, tags }) => (
        <ImageItem key={id} id={id} url={webformatURL} tag={tags} />
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
