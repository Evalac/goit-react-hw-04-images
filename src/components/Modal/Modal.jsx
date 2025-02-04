import css from './Modal.module.css';

function Modal({ largeImg, onClose }) {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={largeImg} alt="pic" />
      </div>
    </div>
  );
}

export { Modal };
