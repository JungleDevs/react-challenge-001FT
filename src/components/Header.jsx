import React from 'react';
import NavigationItems from 'components/NavigationItems';
import badge from 'assets/badge.svg';

export default function Header() {
  return (
    <>
      <header class="header">
        <section class="navigation">
          <div class="badge">
            <img src={badge} alt="Hapu Badge" />
          </div>
          <div class="navbar">
            <NavigationItems />
          </div>
        </section>
        <section class="user-login">
          <a href="#" class="button">
            Become a Nanny Share Host
          </a>
          <a href="#" class="sign-in">
            Sign In
          </a>
        </section>
      </header>
    </>
  );
}
