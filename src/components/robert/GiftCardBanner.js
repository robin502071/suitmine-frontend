import React from 'react';
import mobileimg from '../../images/robert/giftCard/mobile-img.png';

function GiftCardBanner() {
  return (
    <div>
      <div class="giftcard-banner d-none d-md-block position-relative">
        <h1 class="text-white position-absolute">
          MADE FOR YOU
          <br />
          專屬線上禮物卡
        </h1>
      </div>
      <div class="mobile-bg d-md-none position-relative">
        <h1 class="text-white position-absolute">
          MADE FOR YOU
          <br />
          專屬線上禮物卡
        </h1>
        <img class="position-absolute" src={mobileimg} alt="" />
      </div>
    </div>
  );
}

export default GiftCardBanner;