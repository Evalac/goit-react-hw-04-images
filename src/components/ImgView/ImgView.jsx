import { useEffect, useState } from 'react';
import * as ApiService from '../Services/PixabayApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from 'components/Button/LoadMoreBtn';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImgView({ queryName }) {
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState();
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (queryName === '') {
      return;
    }
    setStatus(Status.PENDING);
    ApiService.fetchImg(queryName)
      .then(data => {
        setImgData(data.hits);
        setStatus(Status.RESOLVED);
      })
      .catch(error => setError(error));
  }, [queryName]);

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery data={imgData} />
        <LoadMoreBtn />
      </>
    );
  }

  //   if (status === Status.PENDING) {
  //     <div>Завантажуєм зображення...</div>;
  //   }
}

export { ImgView };
