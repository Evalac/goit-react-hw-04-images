import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

function ImageGalleryItem({ data }) {
  const [largeImg, setLargeImg] = useState(null);

  return (
    <>
      {data.map((img, index) => {
        return (
          <li key={index} className={css.ImageGalleryItem}>
            <img
              className={css.ImageGalleryItem_image}
              src={img.webformatURL}
              alt="pic"
              onClick={() => {
                setLargeImg(img.largeImageURL);
              }}
            />
          </li>
        );
      })}
      {largeImg && (
        <Modal
          largeImg={largeImg}
          onClose={() => {
            setLargeImg(null);
          }}
        />
      )}
    </>
  );
}

export { ImageGalleryItem };
