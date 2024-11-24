import css from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        Ел. пошта
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Пароль
        <input type="password" name="password" />
      </label>
      <button type="submit">Увійти</button>
    </form>
  );
};
