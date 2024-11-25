import css from './Task.module.css';

export const Task = ({ id, text }) => {
  const handleDelete = () => {};

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Удалити
      </button>
    </div>
  );
};
