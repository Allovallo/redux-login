import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Завдання не може бути пустим. Додайте тексту!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input}></input>
      <button type="submit" className={css.button}>
        Додати завдання
      </button>
    </form>
  );
};
