import React from 'react';
import playButton from 'assets/play-button.svg';

export default function Hero() {
  return (
    <>
      <div class="container grid">
        <div class="hero-text">
          <div class="hero-title">
            <h1 class="main-title title">
              Easily create or join a local nanny share with Hapu
            </h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>
            <div class="play">
              <a href="">
                <img src={playButton} alt="Play button" />
              </a>
              <a href="">
                <span>See hapu in action (27 seconds)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="" alt="" />
      </div>
    </>
  );
}
