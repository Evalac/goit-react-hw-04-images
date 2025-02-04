import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ data }) {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem data={data} />
    </ul>
  );
}

export { ImageGallery };
