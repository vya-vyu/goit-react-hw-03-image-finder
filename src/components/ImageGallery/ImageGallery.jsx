import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
const ImageGallery = ({ images, showModalImage, changePage }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images &&
          images.map(el => (
            <ImageGalleryItem
              key={el.id}
              {...el}
              showModalImage={showModalImage}
            />
          ))}
      </ul>
      {images.length > 0 && images.length % 12 === 0 && (
        <Button changePage={changePage} />
      )}
    </>
  );
};

export default ImageGallery;
