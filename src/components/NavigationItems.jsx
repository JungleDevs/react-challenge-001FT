import React from 'react';
import css from 'components/styles/NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <nav class={css.navbar}>
      <ul>
        <li>
          <a href="#">Create Your Nanny Share</a>
        </li>
        <li>
          <a href="#">Browse Shares</a>
        </li>
        <li>
          <a href="#">Our Story</a>
        </li>
      </ul>
    </nav>
  );
}
