import css from './LoadMoreBtn.module.css';

function LoadMoreBtn(params) {
  return (
    <button className={css.Button} type="button">
      LoadMore
    </button>
  );
}

export { LoadMoreBtn };
