import css from './App.module.css';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImgView } from './ImgView/ImgView';

export const App = () => {
  const [queryName, setQueryName] = useState('');

  return (
    <>
      <div className={css.App}>
        <Searchbar onSubmit={setQueryName} />
        <ImgView queryName={queryName} />
      </div>
    </>
  );
};
