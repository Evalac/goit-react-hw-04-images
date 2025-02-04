import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ nextPage }) {
  return (
    <button
      className={css.Button}
      type="button"
      onClick={() => nextPage(prevState => prevState + 1)}
    >
      LoadMore
    </button>
  );
}

export { LoadMoreBtn };
