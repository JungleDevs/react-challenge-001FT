import React from 'react';
import section1Img from 'assets/section1-image.png';
import section3Img from 'assets/section3-image.png';
import section5Img from 'assets/section5-image.png';

export default function PageContent() {
  return (
    <main>
      <section class="section" id="section1">
        <div class="container grid">
          <img src={section1Img} alt="Section 1 image" class="image" />
          <h3 class="title">Share your home, nanny and costs</h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <a href="#">Hapu means tribe</a> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a href="#">Ready to get started?</a>
        </div>
      </section>
      <div class="divider"></div>
      <section class="section" id="section2">
        <div class="container grid">
          <h3 class="title">
            Are you a parent without a nanny and looking to share?
          </h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
        </div>
      </section>
      <div class="divider"></div>
      <section class="section" id="section3">
        <div class="container grid">
          <img src={section3Img} alt="Section 3 image" class="image" />
          <h3 class="title">Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href="" class="link">
            Read how Bridget’s share (without Hapu) ended over $15
          </a>
        </div>
      </section>
      <div class="divider"></div>
      <section class="section" id="section4">
        <div class="container grid">
          <h3 class="title">A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <a href="" class="link">
            Read how Hapu’s tribal background defines our app{' '}
          </a>
        </div>
      </section>
      <div class="divider"></div>
      <section class="section" id="section5">
        <div class="container grid">
          <img src={section5Img} alt="Section 5 image" class="image" />
          <h3 class="title">Coming soon: Nanny Share Daily Diary!</h3>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </div>
      </section>
    </main>
  );
}
