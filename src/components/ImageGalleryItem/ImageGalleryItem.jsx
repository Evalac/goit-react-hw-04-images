import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ data }) {
  return (
    <>
      {data.map(img => (
        <li key={img.id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItem_image}
            src={img.previewURL}
            alt=""
          />
        </li>
      ))}
    </>
  );
}

export { ImageGalleryItem };
