import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ data }) {
  return (
    <>
      {data.map(img => (
        <li key={img.id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItem_image}
            src={img.webformatURL}
            alt="pic"
          />
        </li>
      ))}
    </>
  );
}

export { ImageGalleryItem };
