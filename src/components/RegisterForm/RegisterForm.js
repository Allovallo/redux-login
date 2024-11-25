import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
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
