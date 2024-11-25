import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} name="text"></input>
      <button className={css.button}>Додати завдання</button>
    </form>
  );
};
