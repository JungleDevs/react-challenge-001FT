import React from 'react';
import NavigationItems from 'components/NavigationItems';
import css from 'components/styles/Header.module.css';
import badge from 'assets/badge.svg';

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <section className={css.navigation}>
          <div className={css.badge}>
            <img src={badge} alt="Hapu Badge" />
          </div>
          <div class={css.navbar}>
            <NavigationItems />
          </div>
        </section>
        <div className={css.userLogin}>
          <a href="#" className={css.button}>
            Become a Nanny Share Host
          </a>
          <a href="#" class={css.signin}>
            Sign In
          </a>
        </div>
      </header>
    </>
  );
}
