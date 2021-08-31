import React from 'react';
import hapuLogo from 'assets/hapu-logo.svg';
import facebookLogo from 'assets/facebook-logo.svg';
import instagramLogo from 'assets/instagram-logo.svg';
import twitterLogo from 'assets/twitter-logo.svg';

export default function Footer() {
  return (
    <footer>
      <h3>Become a nanny share host</h3>
      <p>Takes less than 5 minutes to get started</p>
      <a href="" class="link">
        Or browse local nanny-shares
      </a>
      <a href="" class="button secondary">
        <img src="" alt="" />
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </a>
      <section>
        <img src={hapuLogo} alt="" />
        <a href="#">Share Your Nanny</a>
        <a href="#">Our Story</a>
        <a href="#">Blog</a>
        <a href="#">Terms & Privacy</a>
      </section>
      <section>
        <img src={facebookLogo} alt="" />
        <img src={twitterLogo} alt="" />
        <img src={instagramLogo} alt="" />
      </section>
      <div class="divider"></div>
      <footer>Copyright © 2017 Hapu PTY Limited All rights reserved</footer>
    </footer>
  );
}
