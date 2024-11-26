import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Вітаємо, {}</p>
      <button type="button" onClick={() => {}}>
        Вийти
      </button>
    </div>
  );
};
