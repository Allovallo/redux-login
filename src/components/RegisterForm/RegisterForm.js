import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elments.name.value,
        email: form.elements.email.value,
        password: form.elements.password.vzlue,
      }),
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Юзер
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Ел. адреса
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Пароль
        <input type="password" name="password" />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
};
