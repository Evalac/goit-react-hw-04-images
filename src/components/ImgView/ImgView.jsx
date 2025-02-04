import { useEffect, useState, useMemo } from 'react';
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
  const [imgData, setImgData] = useState([]);
  const [error, setError] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (queryName === '') {
      return;
    }

    setStatus(Status.PENDING);
    ApiService.fetchImg(queryName, page)
      .then(data => {
        setImgData(prevImgData => [...prevImgData, ...data.hits]); /// треба розпиляти в новий масив щоб завантажувалось білше зображень а не рендерилась нова сторінка
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [queryName, page]);

  if (status === Status.PENDING) {
    return (
      <div>
        <p> Завантажуєм зображення...</p>
      </div>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery data={imgData} />
        <LoadMoreBtn nextPage={setPage} />
      </>
    );
  }
  if (status === Status.REJECTED) {
    return <div>{error.message}</div>;
  }
}

export { ImgView };
