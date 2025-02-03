import css from './App.module.css';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as ApiService from './Services/PixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const App = () => {
  const [queryName, setQueryName] = useState('');
  const [imgData, setImgData] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (queryName === '') {
      return;
    }
    ApiService.fetchImg(queryName).then(data => setImgData(data.hits));
  }, [queryName]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={setQueryName} />
      <ImageGallery data={imgData} />
    </div>
  );
};
