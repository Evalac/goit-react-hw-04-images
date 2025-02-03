import css from './Searchbar.module.css';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const queryName = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={queryName}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </header>
  );
}

export { Searchbar };
