import ImageItem from '../ImageGallery/ImageGalleryItem';

export default function ImageGallery({ response }) {
  return (
    <ul>
      {response.map(({ id, webformatURL, tags }) => (
        <ImageItem key={id} id={id} url={webformatURL} tag={tags} />
      ))}
    </ul>
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
