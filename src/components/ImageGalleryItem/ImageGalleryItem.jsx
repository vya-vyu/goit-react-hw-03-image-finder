import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  showModalImage,
}) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={e => {
        showModalImage(e);
      }}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        data-url={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
