import css from './App.module.css';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [queryName, setQueryName] = useState('');

  const KEY = '45910491-7a91b10438fcd735159f6d92e';
  const BASE_URL = `https://pixabay.com/api`;

  async function fetchImg(queryName) {
    try {
      const responce = await fetch(
        `${BASE_URL}/?q=${queryName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const imgData = await responce.json();
      return imgData;
    } catch (error) {
      throw new Error(`Зображення з таким імʼям ${queryName} не знайдено`);
    }
  }

  useEffect(() => {
    if (queryName === '') {
      return;
    }
    fetchImg(queryName).then(data => console.log(data));
  }, [queryName]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={setQueryName} />
    </div>
  );
};
