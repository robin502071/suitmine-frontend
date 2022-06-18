import React from 'react';
import PopconfirmTPE from '../components/bao/BookingMap/PopconfirmTPE';
import PopconfirmTYN from '../components/bao/BookingMap/PopconfirmTYN';
import PopconfirmCWS from '../components/bao/BookingMap/PopconfirmCWS';
function BookingMap() {
  return (
    <>
      <div className="main">
        <div className="sidebar py-2 d-flex flex-column align-items-center justify-content-around">
          <a href="#/">
            <i className="fas fa-user"></i>
          </a>
          <a href="#/">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#/">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
        {/* <!------------banner------------> */}
        <div className="banner w-100"></div>
        <div className="bar w-100"></div>
        <div className="container-fluid mapContainerFluid">
          <div className="chineseText fs-3 spanBorder ">
            <p>立即探索離你最近的SUITMINE</p>
          </div>
          <div className="container titleSpan">
            <div className="mapBox d-flex justify-content-center">
              {/* <!------------全台灣地圖------------> */}
              <svg
                className="mapSvg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 423.1 789.8"
              >
                <g id="Background"></g>
                <g id="Flag"></g>
                <g id="Map">
                  <path
                    className="st1"
                    d="M20.1,417.3l8.1-0.9c0.1,0,0.2,0,0.3,0.1l6.6,3.7l4.6,0l3-2.3L44,414c0,0,0-0.1,0.1-0.1l1.7-2.4
               c0.1-0.1,0.2-0.2,0.3-0.2l4.2-0.7l5.5-4.5l3.6-1.9l3-3c0,0,0.1-0.1,0.1-0.1l13.2-7.6c0,0,0.1,0,0.1,0l5.8-1.6l10.3-1.9l5.7-0.3
               c0.1,0,0.3,0,0.4,0.1l2.1,1.9l2.1,1.9l4,4.7l10,3.7l2.9-0.4l6.7-1.9c0.1,0,0.3,0,0.4,0.1l3.8,2.7c0.1,0,0.1,0.1,0.1,0.2l1.8,2.9
               l4.8-0.5l9.5-1.9l2.8-0.9v-2.4l0.3-4.1c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0l-1.5-2.1l-6.4,0.7l-5.4,1.7c-0.1,0-0.2,0-0.3,0l-4.7-2.1
               c-0.1,0-0.1-0.1-0.2-0.1l-3.2-3.8c-0.1-0.1-0.1-0.3-0.1-0.4l0.7-4.7l1.5-4.2l-0.8-6.1c0,0,0-0.1,0-0.1l0.8-5.8c0,0,0-0.1,0-0.1
               l1.6-3.6l-1.3-5l-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-9.7-1.9l-4.7,0.1c-0.1,0-0.2,0-0.2-0.1l-9.8-4.8
               l-15.9-1.8c0,0-0.1,0-0.1,0l-9.4-3.6l-5.3-1.4l-6.1-0.3l-17.7,2.1c-0.1,0-0.2,0-0.3-0.1l-5.7-3.3l-0.4,0.8c0,0.1-0.1,0.1-0.1,0.2
               l-4.4,3.4l-0.6,1.1l-0.8,2.2c0,0,0,0.1-0.1,0.1l-5,6.6l-1,2.4l-1.9,7.1l-1,8.1c0,0.1,0,0.1-0.1,0.2l-3.5,6.2l-2.2,7.8l-0.6,9.9
               l0.2,13.3c0,0.1,0,0.2-0.1,0.3L20.1,417.3z"
                  />
                  <path
                    className="st2"
                    d="M409.3,73.1l-4.6,1l-6.7,3.6l-2.9,2c-0.1,0-0.1,0.1-0.2,0.1l-8.8,1.8l-0.9,1.9l1.9,2.6
               c0.1,0.1,0.1,0.3,0.1,0.5l-1.3,3.1c0,0.1-0.1,0.2-0.2,0.2l-3.7,2.4c0,0-0.1,0-0.1,0l-2.9,1l-2.8,1.5l-2.6,3.3l-2.5,4
               c0,0.1-0.1,0.1-0.1,0.1l-4.1,2.9c0,0-0.1,0.1-0.1,0.1l-5,1.5l-10.9,6.5l-10.6,4.3l-3,1.8l-3.7,3.1l-1.5,3.8l0.1,3.2l0.8,2.5
               l0.4,1.7c0,0.2,0,0.4-0.2,0.5l-3.2,2.2l-5.5,2.7l-3.9,2.8l-3,2.6c0,0-0.1,0.1-0.2,0.1l-4,1.5l-4.7,1.3h0c0,0,0,0,0,0l-2.4,0.7
               l-4,2.9l2.5,9.8c0,0.1,0,0.3-0.1,0.4l-1.8,3.1c-0.1,0.1-0.1,0.2-0.3,0.2l-2.8,1c-0.1,0-0.2,0-0.3,0l-2.5-0.5l-2.8,1.2l-2.2,6.3
               l-1.1,3.7l0.5,3.5c0,0.1,0,0.2-0.1,0.3l-3,4.7c0,0,0,0.1-0.1,0.1l-11.3,11.4l-3.3,7.9l2.4,0.7c0.2,0.1,0.4,0.3,0.4,0.5l-0.5,4.4
               l1,2.6l3.7,0.8c0.1,0,0.1,0,0.1,0.1l3.6,2.1l2.9,2l2.9-0.4l3.8-1.8c0.1,0,0.1,0,0.2,0h4c0.1,0,0.2,0,0.3,0.1l4.7,3.8c0,0,0,0,0,0
               l2,1.6l5.2,2.5l12.2,3.1l6.7,2.5l5,0l3.8-3.5l1.8-4.7c0.1-0.2,0.2-0.3,0.4-0.3l3.1-0.7c0.1,0,0.3,0,0.4,0.1l14.9,8.9l8.7,1.3
               l-0.5-0.7c-0.1-0.1-0.1-0.3,0-0.4l0.4-1.1c0,0,0-0.1,0.1-0.1l0.8-1l0.4-1.2l0.4-5.1l0.7-2.7c0,0,0-0.1,0.1-0.1l1-1.8l0.9-2
               l-0.3-5.5l0.2-2.6c0-0.1,0.1-0.2,0.1-0.3l5.7-6.5c0,0,0.1-0.1,0.1-0.1l5-2.9l1.8-1.7l-0.4-1.9l-1.3-2.1c0,0,0-0.1-0.1-0.1l-0.6-2.4
               c0-0.1,0-0.1,0-0.2l0.4-2c0-0.1,0.1-0.3,0.2-0.3l4.6-2.6l0.6-4.2l-1.1-5.1l-2.1-4c-0.1-0.2-0.1-0.5,0.2-0.6l1.5-1.1
               c0,0,0.1-0.1,0.1-0.1l2.1-0.7c0,0,0.1,0,0.1,0l2.5-0.3c0,0,0.1,0,0.1,0l2.1,0.2v-0.5l-5.8-1.1c-0.1,0-0.1,0-0.2-0.1l-5.3-3.3
               c-0.1,0-0.1-0.1-0.2-0.2l-2.8-5.1c0-0.1-0.1-0.1-0.1-0.2l-0.2-6.6c0-0.1,0-0.1,0-0.2l1.1-3.1l0.1-3.1l-2.7-12.5L377,124l0.4-6.3
               l1.2-6.3l1.9-5.5c0,0,0-0.1,0-0.1l2.4-3.9l15.2-18.5l4.5-3.9c0,0,0.1-0.1,0.1-0.1l9.2-4.6l-0.2-0.3L409.3,73.1z"
                  />
                  <path
                    className="st3"
                    d="M296.5,441.5l-2.9,4.1l1.3,5.3l0.5,5.6c0,0.1,0,0.2-0.1,0.3l-3,5.6l-2.8,4.3l-2.2,5.3l-1.9,6.8l-3,6.3
               l-3.9,10.7l-2.5,4.8l0.1,5.3l-0.8,5.1c0,0.2-0.1,0.3-0.2,0.4l-5.2,3c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0-0.1,0l-6.7-1
               c-0.1,0-0.2-0.1-0.2-0.1l-9.5-7.8c0,0-0.1-0.1-0.1-0.1l-7.3-12.8l-4.4-1.2l-5-0.7c-0.1,0-0.2-0.1-0.3-0.1l-4-3.8l-4.9-2.3l-6.3-2.3
               c-0.1,0-0.2-0.1-0.3-0.2l-4.1-6.6c0-0.1-0.1-0.1-0.1-0.2l-0.8-5.4l-12.1,3l-5.1,3.2l-3.2,3.1c0,0-0.1,0-0.1,0.1l-6.1,4l-0.7,4.3
               l1.8,4.7c0.1,0.1,0,0.3,0,0.4l-2.2,4c0,0.1-0.1,0.2-0.2,0.2l-5.8,3.1l-0.7,5.2l1.7,8c0,0.1,0,0.1,0,0.2l-2.5,10.6l0,9
               c0,0.1,0,0.2-0.1,0.3l-3.5,4.7c0,0,0,0.1-0.1,0.1l-6.8,5.8l-1.8,7.6l1.1,6.4l2.4,3.6l4.9,5.1c0.1,0.1,0.1,0.1,0.1,0.2l1,4
               c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.4,0.2l-2.4,0.3l2.4,4.7c0,0,0,0.1,0.1,0.2l0.6,3.6l4,1c0.1,0,0.1,0,0.2,0.1l4.5,3
               c0.2,0.1,0.3,0.3,0.2,0.5l-2.2,11.2l-0.1,4.1c0,0.1,0,0.1,0,0.2l-1.6,4c0,0.1-0.1,0.2-0.3,0.3l-7.9,3.3l-3.8,2.2c0,0-0.1,0-0.1,0.1
               l-6.1,1.3l-4.2,3.5l-1.9,5.2l-3,5.4l-2.4,5.9l-0.7,11.8l1,5.2l1.6,4.8l0.9,5.9l0,4.3l2,3.9l3.8,4.5c0.1,0.2,0.2,0.4,0,0.6l-2,3.1
               c0,0.1-0.1,0.1-0.2,0.2l-4.2,2.5l-1.6,2.9l-0.4,3.4l2,2.9l2.7,1.3c0.1,0,0.1,0.1,0.2,0.2l2.5,3.6c0.1,0.1,0.1,0.2,0.1,0.3l-0.1,4.6
               l0.4,4.7l2.6,4.7l3.6,3.8l8.1,3.7l3-0.2l-0.2-11.4l1.4-13.1l1.1-4.7c0,0,0-0.1,0.1-0.1l7.7-13.5l3.9-13.5l1.5-9.9
               c0-0.1,0-0.1,0.1-0.2l2.6-4.8l6.6-8.2l2.1-4l4.2-10.8c0,0,0-0.1,0.1-0.1l1.7-2.2c0-0.1,0.1-0.1,0.2-0.1l2.1-1.1l8.7-9.6
               c0,0,0.1-0.1,0.1-0.1l13-8.7l3.7-3.6l3.8-4.8l1.7-2.8l0.9-2.4l0.1-2.2l-0.5-5c0,0,0-0.1,0-0.1l0.4-2.1c0-0.1,0.1-0.2,0.1-0.2
               l2.7-3.1l11.2-9.5l1-2.1l8.3-12l1.7-4.7l2.4-10.5c0,0,0-0.1,0.1-0.1l3.9-6.8l1.3-4.6l0.9-1.9c0-0.1,0.1-0.1,0.1-0.1l1.7-1.8l4-2.9
               l1.6-1.6l3.9-7.9l0.8-7.7l-0.1-8.2l1.2-9.3l1.7-5.1l2.2-4l5.7-7.7l1.8-3.8l3.6-20.9l-2.2-0.6L296.5,441.5z"
                  />
                  <path
                    className="st4"
                    d="M213.1,82.9c0.1,0,0.2,0,0.3,0.1l3.7,2.5c0.1,0.1,0.1,0.1,0.2,0.2l3.2,6.8l3.9,1.5l3.5,1l3.4,1.6l5.5,1.8
               c0.1,0,0.2,0.1,0.2,0.1l2.9,3.4c0.1,0.1,0.1,0.3,0.1,0.4l-0.9,4.5l2.5,2.7l5.2,1.6c0.1,0,0.1,0,0.1,0.1l3.4,2.5l2.5,2.5l2.9,0.5
               l3-0.3c0.2,0,0.3,0,0.4,0.2l2.8,2.8c0,0,0.1,0.1,0.1,0.1l2,3.6l3.4,1.7l2.9,2.2c0.1,0.1,0.2,0.2,0.2,0.4l0.3,4.1l1.3,5.8
               c0,0.1,0,0.2,0,0.2l-1.5,6.3c0,0.1,0,0.1-0.1,0.2l-3.6,5.1l0.4,3.1l4,3.1l4.9,2.9l4.4,0.8c0.1,0,0.1,0,0.2,0.1l3.3,2.3l5.9,3.3
               l3.3,1.5l0.3-0.7c0-0.1,0.2-0.2,0.3-0.3l3.2-1.3c0.1,0,0.2,0,0.3,0l2.5,0.5l2.5-0.9l1.6-2.8l-2.5-9.9c0-0.2,0-0.4,0.2-0.5l4.4-3.2
               c0,0,0.1-0.1,0.2-0.1l1.9-0.5l0,0l-1.7-3.8l-7.2-6.8c-0.1-0.1-0.1-0.1-0.1-0.2l-1.1-4.5l-0.7-4.3c0-0.1,0-0.3,0.1-0.4l2.5-3
               l1.1-3.9l-6.6-9.7l-3.8-1.5l-5.9,0.3c-0.1,0-0.2,0-0.3-0.1l-4.2-2.3c-0.2-0.1-0.3-0.3-0.2-0.5l1.1-5.3l-0.8-3.9l-4.2-4
               c-0.1-0.1-0.1-0.2-0.1-0.3l-0.9-4.1c0-0.1,0-0.1,0-0.2l0.9-4.6l-0.2-5c0-0.1,0-0.3,0.1-0.4l3-3.3c0.1-0.1,0.1-0.1,0.2-0.1l10.4-3.1
               l2.5-2.6l0.7-3.2l-0.4-3.1l-4-5.9l-3.3-1.7l-3.2-0.8c-0.1,0-0.2-0.1-0.2-0.1l-2.6-2.3l-3.8-2.4l-5-2.4c-0.1,0-0.1-0.1-0.2-0.1
               l-3.2-3.5l-16,2.9l-7.2,2.6l-3.5,1.9l-3,2.6l-3.6,2.2c0,0-0.1,0-0.1,0.1l-14.8,4.9l-5.8,4.9l-5.6,6.7L200.2,83l1.9,0.7L213.1,82.9z
               "
                  />
                  <path
                    className="st5"
                    d="M33.2,551c0.1,0.1,0.3,0.2,0.3,0.3l0.1,0.4l3.1,6.8l3.6,1.8l12.5,1.8l6.6-0.7c0,0,0,0,0.1,0c0,0,0,0,0.1,0
               l6.7,0.8l3.2-1.1l2.8-2.1c0,0,0.1,0,0.1-0.1l5.2-2.1l4.9-3.5l1.9-4.3l2.4-4.3l4.3-5.7l5-5.3l5.3-4.4l6-5.9l5.2-6.7l8.1-13.7
               l8.4-12.2l1.6-4.7l-6.2-0.7c0,0-0.1,0-0.1,0l-2.9-0.9l-3.9,0.5l-4.3,1.9c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0h0l0,0l-3,0
               c-0.1,0-0.2,0-0.3-0.1l-3.7-2.8c-0.1-0.1-0.1-0.1-0.2-0.2L105,480c0-0.1,0-0.1,0-0.2l1.4-11.4l-0.8-5.9l-7.9-8.1
               c-0.1-0.1-0.1-0.1-0.1-0.2l-1.4-4.1l-1.6-3.2l-3.1-1.9l-5.7-1.9l-6.8,0.4l-12.2,2.3l-6.2,2.8l-4.9,3.7l-3.7,3.8l-5.4,4.2l-4.6,2.8
               l-2,3.9c-0.1,0.1-0.1,0.2-0.2,0.2l-5.1,2.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0l-5.9-1.5l-7.1-1c0,0-0.1,0-0.1,0l-3.8-1.4
               l-1,2.5l2.7,1.8c0.2,0.1,0.2,0.3,0.2,0.5c0,0.2-0.2,0.4-0.4,0.4l-1.9,0.5l-1.1,1.2l-2.7,7.2l-0.3,1.6l0.4,1.8c0,0.2,0,0.3-0.1,0.4
               l-1.8,2.1l-1.1,2.9l-0.7,2.2l1,2.4l0.7,3.3c0,0.1,0,0.2,0,0.3l-1.1,2.1c-0.1,0.1-0.2,0.2-0.3,0.2l-2.2,0.7l-1.7,1l-0.5,2.8l2.1,2.4
               l3.4,2.9c0.1,0.1,0.1,0.1,0.2,0.2l0.6,2.1c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.4,0.2l-5.9,0.1v0.7l7.2,1.8
               c0.1,0,0.2,0.1,0.2,0.1l1.2,1.3c0.1,0.1,0.2,0.3,0.1,0.5l-0.8,2.5c-0.1,0.1-0.2,0.3-0.3,0.3l-2.5,0.8l-3,0.4l-2.2,1.1l-0.8,1.7
               L4,525.7l0.5,2.5l2,1.8l1.8-0.5l1.4-2.2c0,0,0.1-0.1,0.1-0.1l1.9-1.7c0.1-0.1,0.4-0.2,0.5-0.1l3.3,1.4c0.1,0.1,0.2,0.2,0.3,0.3
               l0.7,2c0,0.1,0,0.1,0,0.2l-0.4,5.5l0.8,1.4l2.1,0.1l1.2-1.9l0.8-2.7c0,0,0-0.1,0.1-0.1l1-1.5c0.1-0.2,0.3-0.2,0.5-0.2l5.1,0.7
               c0.2,0,0.4,0.2,0.4,0.4l0.9,4.3c0,0.1,0,0.2,0,0.3l-2.2,4.9c0,0.1-0.1,0.2-0.2,0.2l-3.4,2.4l2.7,2.8c0,0,0.1,0.1,0.1,0.1l1.5,2.9
               c0,0,0,0.1,0,0.1l0.7,4.4l4.4-2.6C32.9,550.9,33.1,550.9,33.2,551z"
                  />
                  <path
                    className="st6"
                    d="M98.7,259l3.2,2.8c0.1,0.1,0.1,0.1,0.1,0.2l2.2,5.1c0,0,0,0.1,0,0.1l0.8,6l3.4,4.2l9.5,2.8
               c0.1,0,0.1,0.1,0.2,0.1l3.5,2.9c0,0,0.1,0.1,0.1,0.1l2.6,4.1l1.6,3.3c0,0.1,0.1,0.1,0.1,0.2l0,3.1l0.9,2.4l3.2,0.6
               c0.1,0,0.1,0,0.2,0.1l4.4,2.9c0.1,0.1,0.2,0.2,0.2,0.4l0,0.7l2.9,0.1l14.6,2l3.2-0.5l3.9-3.7l6.1-11.6l3-6.8c0-0.1,0.1-0.2,0.2-0.3
               l5.2-2.5c0.1,0,0.2-0.1,0.3,0l8.2,1.2l4.5-0.2l4.5-6c0,0,0.1-0.1,0.1-0.1l2.4-1.5c0.2-0.1,0.4-0.1,0.6,0l7.1,5.3l2.4-0.6l2-4.2
               c0-0.1,0.1-0.1,0.1-0.2l3.8-3.2c0.1-0.1,0.2-0.1,0.3-0.1l5.3,0.1l3.9-1.5l6.3-6.1c0,0,0.1-0.1,0.1-0.1l4.1-2.3c0,0,0.1,0,0.2-0.1
               l3.5-0.7l7.1-3.7c0.1,0,0.1-0.1,0.2-0.1l5-0.2l4.9-0.8l9-3.5c0,0,0.1,0,0.2,0l3.8-0.3c0,0,0.1,0,0.1,0l3.8,0.9l10.6,1l2-1.5
               l0.9-1.6c0-0.1,0.1-0.1,0.2-0.2l2.7-1.4l2.3-2.9l1-4.1c0,0,0-0.1,0.1-0.1l2.4-4c0-0.1,0.1-0.1,0.2-0.2l6-3.8l1.8-4.8l0.3-3.3
               c0-0.1,0.1-0.2,0.1-0.3l3.4-3.5l0,0l-4.2-3.4h-3.7l-3.8,1.8c0,0-0.1,0-0.1,0l-3.2,0.5c-0.1,0-0.3,0-0.4-0.1l-3-2.1l-3.5-2l-3.9-0.9
               c-0.2,0-0.3-0.1-0.4-0.3l-1.2-3c0-0.1,0-0.2,0-0.2l0.5-4.1l-4.7-1.3l-8.3,0.8l-0.5,0.4c0,0,0,0,0,0c0,0,0,0,0,0l-2.9,2l-1.4,4.4
               c0,0.1-0.1,0.3-0.3,0.3l-3.9,1.6c-0.1,0-0.1,0-0.2,0l-4.2-0.1l-3.3,2.3l-3.6,3.5c0,0-0.1,0.1-0.1,0.1l-4.8,2.6l-9.3,7.4
               c0,0-0.1,0.1-0.1,0.1L222,232l-7.1,3.8c-0.1,0.1-0.3,0.1-0.4,0l-4.4-1.7c-0.1,0-0.1-0.1-0.2-0.1l-4-4.4l-4.7-1.9l-7.8-0.6l-4.1,2.5
               l-0.7,5.7c0,0.2-0.1,0.3-0.3,0.4l-4.2,2.3c-0.1,0-0.1,0.1-0.2,0.1l-9.9,0.5c0,0,0,0,0,0c-0.1,0-0.2,0-0.2-0.1l-9.3-5.4l-5.2-1
               c0,0-0.1,0-0.1,0l-6-2.9l-12.3-9.1l-5.1-4.5l-3.9-4.1l-7.2-11.1l-10.3,11.5l-2.6,4.3l-2.3,8c0,0,0,0.1,0,0.1l-7.5,13l-2.2,9.9
               l-1.8,5.2c0,0.1-0.1,0.2-0.2,0.2l-2.5,2.1l-0.6,2.5c0,0.1-0.1,0.1-0.1,0.2l0,0l4,1.3C98.6,258.9,98.7,259,98.7,259z"
                  />
                  <path
                    className="st7"
                    d="M178.6,715.2l-3.1,0.2c-0.1,0-0.2,0-0.2,0l-8.3-3.8c-0.1,0-0.1-0.1-0.2-0.1l-3.7-4c0,0-0.1-0.1-0.1-0.1
               l-2.6-4.8c0-0.1-0.1-0.1-0.1-0.2l-0.4-4.9l0.1-4.5l-2.3-3.4l-2.7-1.3c-0.1,0-0.1-0.1-0.2-0.2l-2.2-3.1c-0.1-0.1-0.1-0.2-0.1-0.3
               l0.4-3.7c0-0.1,0-0.1,0.1-0.2l1.7-3.1c0-0.1,0.1-0.1,0.2-0.2l4.2-2.5l1.8-2.7l-3.6-4.2c0,0,0-0.1-0.1-0.1l-2.1-4.1
               c0-0.1-0.1-0.2-0.1-0.2v-4.3l-0.8-5.7l-1.6-4.8l-1-5.4c0,0,0-0.1,0-0.1l0.7-11.9c0-0.1,0-0.1,0-0.2l2.5-6.1l3-5.4l1.9-5.3
               c0-0.1,0.1-0.2,0.2-0.2l4.4-3.6c0.1-0.1,0.1-0.1,0.2-0.1l6.1-1.3l3.8-2.2l7.7-3.3l1.5-3.7l0.1-4.1l2.2-10.9l-4.1-2.7l-4.2-1
               c-0.2,0-0.3-0.2-0.4-0.4l-0.6-3.8l-2.6-5.1l-4-0.7l-3.3,0.2l-6.8,5.4c-0.2,0.2-0.5,0.1-0.7,0l-4.8-4.5l-6-7l-5.4,1.3l-5.3,4.7
               c-0.2,0.1-0.4,0.2-0.6,0.1l-10.4-5.2l-7.3,3.5l-5.1,5.7c-0.1,0.1-0.1,0.1-0.2,0.1l-6.5,2.3c-0.1,0-0.1,0-0.2,0l-14.1-0.8l-1.3,3.6
               l-1,5.8l-2.1,6.4l0.4,5.6l-0.1,7.7c0,0,0,0.1,0,0.1l-4.6,17.1l-0.1,5.6l2.2,6c0,0,0,0.1,0,0.2l0.3,6.7c0,0.1,0,0.1,0,0.2l-6.4,16.2
               l1.7,1.1l3.9,3.5l3.6,2.5l8.1,3.8l3.6,2.3c0.1,0.1,0.1,0.1,0.2,0.2l0.5,1.1l0.8,2.9l0.7,0.5l0.8,0.3c0,0,0.1,0,0.1,0l2.6,1.5
               l6.7,5.2c0,0,0.1,0.1,0.1,0.1l1.6,2.3l3.6,8l4.5,5.5l1.4,2.3l16.2,41.9c0,0.1,0,0.2,0,0.3l-0.5,2.4c0,0.1,0,0.1-0.1,0.2l-1.9,2.8
               l-0.4,2.5l0,8.6l-0.3,2.7l0,1.5l0.3,1.8l4.4,7.4c0.1,0.1,0.1,0.2,0.1,0.3l-1,5.6l0.1,1.6l2.7,2.3l2.4,0.6l1.5-1.6l0.3-5.2
               c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1,0l6.4,1.6l6.5,2.9c0,0,0.1,0,0.1,0.1l5.5,4.2c0,0,0.1,0.1,0.1,0.1
               l2.8,4.3l0.2-3.2l-1.1-7.4l-0.1-6.9c0-0.1,0.1-0.3,0.2-0.4l3.2-3l2.7-2l2-4.7l1.2-5.8L178.6,715.2L178.6,715.2z"
                  />
                  <path
                    className="st8"
                    d="M417.8,69.8l-2.9-1.4l-3.4-0.9l-2.8-0.3l-5.6,0.9c-0.1,0-0.2,0-0.3,0l-1.7-0.8c-0.1,0-0.2-0.1-0.2-0.2
               l-2.1-3.3c0,0,0-0.1-0.1-0.1l-2-7l-0.6-4.3c0,0,0-0.1,0-0.1l0.4-2.4c0,0,0-0.1,0-0.1l1.1-2.6l-2.2-1.4L368.2,39l-0.2,9.1l0.1,2.2
               l2.9,3c0.1,0.1,0.2,0.3,0.1,0.4l-0.3,2c0,0.1-0.1,0.2-0.2,0.3l-2,1.5c0,0-0.1,0-0.1,0.1l-3.2,1.2c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0
               c0,0,0,0-0.1,0c0,0,0,0,0,0l-4.2-0.5c0,0-0.1,0-0.1,0l-8.6-3.6c0,0-0.1,0-0.1-0.1l-2.4-1.7l-3-2.9l-2.4-2.9c0,0,0-0.1-0.1-0.1
               l-1.4-2.8l-2.3-3c0-0.1-0.1-0.1-0.1-0.2l-0.5-2.3c0-0.2,0-0.4,0.2-0.5l2.6-1.8l5.9-2.6l2.9-1.9l-1.3-0.9c0,0-0.1-0.1-0.1-0.1
               l-0.9-1c-0.1-0.1-0.1-0.2-0.1-0.3l-0.1-1.8c0-0.1,0-0.2,0.1-0.3l0.8-1.4l0.8-1l0-0.1l-1.2-0.3l-2.4,0.3l-2.1,0.6l-0.9,0.4
               c-0.2,0.1-0.5,0-0.6-0.2l-2.9-6.1l-8-11.3l-3.5-2.6l-8.5-1l-8.8,2l-7.7,3.9l-5.2,4.7l-2.5,4.7l-1.7,4.1c0,0.1,0,0.1-0.1,0.1
               l-0.6,0.7c0,0.1-0.1,0.1-0.2,0.1l-1.5,0.7L291,27l-0.5,1.7l2.2,1.3c0,0,0.1,0,0.1,0.1l4.7,4.8c0,0,0,0.1,0.1,0.1l2.9,4.6
               c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1-0.2,0.3-0.3,0.3l-2.8,1.1c-0.2,0.1-0.4,0-0.5-0.1l-1.3-1.3c0,0-0.1-0.1-0.1-0.2l-1-2.2l-1.4-2
               l-2.6-0.9l-2.4,0l-1.7,0.3L285,36l-5,4.1c0,0-0.1,0.1-0.1,0.1l-3.8,1.5l-8.3,1.5l2.8,3l5,2.4l3.9,2.5l2.6,2.3l3.2,0.7
               c0,0,0.1,0,0.1,0l3.4,1.8c0.1,0,0.1,0.1,0.2,0.2l4.2,6.1c0,0.1,0.1,0.1,0.1,0.2l0.4,3.3c0,0.1,0,0.1,0,0.2l-0.8,3.4
               c0,0.1-0.1,0.2-0.1,0.2l-2.7,2.8c-0.1,0.1-0.1,0.1-0.2,0.1l-10.4,3.1l-2.8,3l0.2,4.8c0,0,0,0.1,0,0.1l-0.9,4.6l0.8,3.9l4.2,4
               c0.1,0.1,0.1,0.2,0.1,0.3l0.8,4.1c0,0.1,0,0.1,0,0.2l-1,5.1l3.7,2.1l5.9-0.3c0.1,0,0.1,0,0.2,0l4.1,1.6c0.1,0,0.2,0.1,0.2,0.2
               l6.8,10c0.1,0.1,0.1,0.3,0.1,0.4l-1.2,4.2c0,0.1-0.1,0.1-0.1,0.2L298,127l0.6,4l1.1,4.3l7.1,6.8c0,0,0.1,0.1,0.1,0.2l1.8,4l0,0l0,0
               l4.3-1.2l3.8-1.4l3-2.6l4-2.8l5.5-2.7l2.8-2l-0.3-1.3l-0.8-2.5c0,0,0-0.1,0-0.1l-0.1-3.4c0-0.1,0-0.1,0-0.2l1.6-4
               c0-0.1,0.1-0.1,0.1-0.2l3.8-3.2l3.2-1.9l10.6-4.3l10.9-6.5c0,0,0.1,0,0.1,0l4.9-1.5l3.9-2.8l2.4-4l2.7-3.4c0-0.1,0.1-0.1,0.2-0.1
               l3-1.6l2.9-1l3.5-2.3l1.2-2.7l-1.9-2.7c-0.1-0.1-0.1-0.3,0-0.5l1.1-2.4c0.1-0.1,0.2-0.2,0.4-0.3l8.9-1.8l2.9-1.9l6.8-3.7
               c0,0,0.1,0,0.1,0l4.8-1c0.1,0,0.2,0,0.3,0.1l2.7,1.5c0.1,0,0.1,0.1,0.2,0.2l0.4,0.6l0,0l6.1-3L417.8,69.8z"
                  />
                  <path
                    className="st9"
                    d="M270.1,262.6c0,0,0.1-0.1,0.1-0.1l5.4-1.8l3.9-1.8l-0.2-2.6l-1-4.7l-10.5-1l-3.8-0.9l-3.6,0.2l-8.9,3.5
               c0,0-0.1,0-0.1,0l-5.1,0.8l-5,0.2l-7.1,3.7c0,0-0.1,0-0.1,0l-3.5,0.7l-4,2.2l-6.4,6.1c0,0-0.1,0.1-0.2,0.1l-4.1,1.5
               c-0.1,0-0.1,0-0.2,0l-5.2-0.1l-3.6,3l-2.1,4.3c-0.1,0.1-0.2,0.2-0.3,0.3l-2.8,0.7c-0.1,0-0.3,0-0.4-0.1l-7-5.2l-2.1,1.3l-4.6,6.1
               c-0.1,0.1-0.2,0.2-0.4,0.2l-4.9,0.2l-8.2-1.2l-4.9,2.3l-2.9,6.7l-6.2,11.7c0,0-0.1,0.1-0.1,0.1l-4,3.9c-0.1,0.1-0.2,0.1-0.3,0.1
               l-3.4,0.5c0,0-0.1,0-0.1,0l-14.6-2.1l-2.9-0.1l0,2.4c0,0.2-0.1,0.4-0.3,0.5l-3.3,1.1l-0.9,2l0.4,3.1c0,0.1,0,0.2,0,0.3l-1.6,3.7
               l-1.3,4.3L128,324l-0.9,5.4l-0.7,10.7l1.6,4.9l2.8,2.5l3.1,1.1c0,0,0,0,0.1,0l4.5,2.3c0.2,0.1,0.3,0.3,0.3,0.6l-0.8,2.9
               c0,0.2-0.2,0.3-0.3,0.3l-3,1.2l-2,1.8l-1.7,1.1l0,0l1.5,5.6c0,0.1,0,0.2,0,0.3l-1.6,3.7l-0.8,5.7l0.8,6.1c0,0.1,0,0.2,0,0.2
               l-1.5,4.2l-0.7,4.3l3,3.5l4.4,1.9l5.3-1.6l6.8-0.7c0.2,0,0.4,0.1,0.5,0.2l2,2.7l4.7,0.5c0,0,0.1,0,0.1,0l5.5,2.1l3.3,0.9
               c0,0,0.1,0,0.1,0l4.2,2.3c0.2,0.1,0.3,0.3,0.3,0.5l-0.3,4.3c0,0.1,0,0.1-0.1,0.2l-2.3,4l1,3.7l2.1,5.2c0,0,0,0.1,0,0.2l0.3,4.7
               l0.8,2.8l5.9,1l20.7,0.1c0,0,0.1,0,0.1,0l4.3,1l4.8,1.8c0.1,0,0.2,0.1,0.2,0.2l3.4,4.7c0,0,0.1,0.1,0.1,0.1l0.3,1l4.3-2.4l2.2-2.1
               l-1.3-4.7c0-0.1,0-0.3,0-0.4l1.2-2.1l1.2-3.2c0-0.1,0.1-0.2,0.2-0.2l4.2-3.1c0.1,0,0.1-0.1,0.2-0.1l6-1.3l5.9-0.2l4-3.6l1.1-6.7
               c0-0.1,0-0.2,0.1-0.2l3.2-4.2c0.1-0.1,0.1-0.1,0.2-0.2l6.1-2.2l3.4-2.4l1.3-3.9l2.6-10.2l1-6.6l-0.8-5.7l-0.9-4.3l-2.5-3.2
               l-1.8-3.3c-0.1-0.2-0.1-0.3,0-0.5l4.6-7.5l0.2-2.9c0,0,0-0.1,0-0.1l2.1-5.7l3.1-6.9l2.5-7.1l1.2-8l0.5-6l-1.4-3.5l-1.7-2.6
               c-0.1-0.1-0.1-0.3-0.1-0.4l1.9-6.2l4.1-8.7c0,0,0-0.1,0.1-0.1l6.4-8.3l0.2-2.8l-1.1-3.4l-4.1-2.6c0,0-0.1,0-0.1-0.1l-2.3-2.5
               c-0.1-0.1-0.1-0.2-0.1-0.3l-0.2-8.1c0-0.2,0.1-0.3,0.2-0.4L270.1,262.6z"
                  />
                  <path
                    className="st10"
                    d="M136.5,214.9l5.1,4.4l12.2,9l5.9,2.8l5.2,1c0.1,0,0.1,0,0.2,0.1l9.3,5.3l9.6-0.5l3.9-2.1l0.7-5.7
               c0-0.2,0.1-0.3,0.2-0.4l4.5-2.7c0.1-0.1,0.2-0.1,0.3-0.1l8,0.6c0.1,0,0.1,0,0.1,0l4.9,2c0.1,0,0.1,0.1,0.2,0.1l4,4.4l4.1,1.6l7-3.7
               l5.6-2.3l9.3-7.4l4.8-2.6l3.7-3.5l3.5-2.5c0.1-0.1,0.2-0.1,0.3-0.1l4.2,0.1l3.6-1.5l1.4-4.3c0-0.1,0.1-0.2,0.2-0.3l2.8-1.9l0,0
               l-0.5-3.5l-3.6-6.2l-2.6-2.6c-0.1-0.1-0.1-0.1-0.1-0.2l-1-3.4l-3.7-3l-9.9,2.5c-0.1,0-0.1,0-0.2,0l-3.9-0.4l-5.4,0.4l-6.2,1.7
               c-0.1,0-0.2,0-0.3,0l-3.3-0.8c-0.3-0.1-0.4-0.3-0.4-0.6l0.7-4.1l1-3.7l-0.7-3.1l-0.8-2.3c0-0.1,0-0.2,0-0.3l0.8-2.6l0.6-2.7l0.3-3
               l-0.6-4l-2.9-2.5l-9.8-4.6l-5-3.7c0,0-0.1,0-0.1-0.1l-3.1-3.6c0,0-0.1-0.1-0.1-0.1l-3.4-8.4l-3.5,0.9c0,0-0.1,0-0.1,0
               c-0.1,0-0.1,0-0.2,0l-3.5-1.4c-0.1,0-0.2-0.1-0.2-0.2l-2.1-3l-3.4-2.1l-5-1.9l-0.1,0.5c0,0.1-0.1,0.3-0.3,0.3l-2.8,1.4l-0.6,1.3
               l-1.5,4.6c0,0.1-0.1,0.1-0.1,0.2l-3,3.1l-2,2.8l0.7,4.2c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.3,0.2-0.4,0.1l-5.7-1.1l-4.3,1.1l-3.7,2.7
               l-3.3,3.4l-1.1,1.9l-0.9,2.1c0,0-0.1,0.1-0.1,0.1l-1.5,1.7c-0.1,0.1-0.1,0.1-0.2,0.1l-5.3,1.6l-1.1,1.9l-1.3,5c0,0,0,0.1,0,0.1
               l-4.8,8.5l-1.7,4.4l-0.7,5.3c0,0,0,0.1,0,0.1l-1.5,3.3c0,0,0,0.1-0.1,0.1l-5.6,6.2l0,0l7.3,11.2L136.5,214.9z"
                  />
                  <path
                    className="st11"
                    d="M85.9,635l-2.2-6c0-0.1,0-0.1,0-0.2l0.1-5.8c0,0,0-0.1,0-0.1l4.6-17.1l0.1-7.6l-0.4-5.6c0-0.1,0-0.1,0-0.2
               l2.1-6.4l1-5.8l1.4-4c0.1-0.2,0.3-0.4,0.5-0.3l14.4,0.9l6.3-2.2l5.1-5.6c0,0,0.1-0.1,0.2-0.1l7.6-3.6c0.1-0.1,0.3-0.1,0.4,0
               l10.3,5.2l5.1-4.6c0.1-0.1,0.1-0.1,0.2-0.1l5.9-1.4c0.2,0,0.4,0,0.5,0.2l6.1,7.2l4.4,4.2l6.6-5.2c0.1-0.1,0.2-0.1,0.3-0.1l3.5-0.2
               c0,0,0.1,0,0.1,0l4.2,0.8l2.5-0.3l-0.8-3.3l-4.9-5.1l-2.5-3.8c0-0.1-0.1-0.1-0.1-0.2l-1.1-6.6c0-0.1,0-0.1,0-0.2l1.9-7.9
               c0-0.1,0.1-0.2,0.2-0.3l6.9-5.8l3.4-4.6l0-8.9c0,0,0-0.1,0-0.1l2.4-10.6l-1.7-7.9c0-0.1,0-0.1,0-0.2l0.7-5.6c0-0.2,0.1-0.3,0.3-0.4
               l5.9-3.2l2-3.6l-1.7-4.6c0-0.1,0-0.2,0-0.2l0.7-4.7c0-0.1,0.1-0.3,0.2-0.3l6.3-4l3.2-3.1c0,0,0.1,0,0.1-0.1l5.2-3.3
               c0,0,0.1,0,0.1-0.1l12.2-3l-0.2-1.5l-2.2-6l-5-4.1l-4.5-2.9c-0.1-0.1-0.2-0.2-0.2-0.3l-0.8-3.2c0-0.1,0-0.2,0-0.3l1.1-2.6
               c0-0.1,0.1-0.2,0.3-0.3l4.4-2l2.2-3.7l-1.5-4.5v0c0,0,0,0,0,0l-0.5-1.5l-3.3-4.5l-4.6-1.8l-3.3-0.8l-14.8,7.5l-6.7,5.4l-2.9,5.4
               c0,0,0,0.1-0.1,0.1l-3.4,4.1c0,0-0.1,0.1-0.1,0.1l-6.2,3.5l-6.4,4.9l-3.6,4.3c0,0-0.1,0.1-0.1,0.1l-10,5.9c-0.1,0-0.1,0.1-0.2,0.1
               l-4.8,0.5c0,0-0.1,0-0.1,0l-5.3-0.6l-2.6,2.6l-0.1,3.7l1.2,3.6l0.8,5.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2l-1.9,5.4
               c0,0,0,0.1-0.1,0.1l-8.5,12.3l-8.1,13.8l-5.3,6.8l-6.1,5.9l-5.3,4.4l-4.9,5.2l-4.2,5.7l-2.4,4.2l-1.9,4.4c0,0.1-0.1,0.2-0.2,0.2
               l-5.1,3.6c0,0-0.1,0-0.1,0.1l-5.2,2.1l-2.8,2.1c0,0-0.1,0.1-0.1,0.1l-3.4,1.2c-0.1,0-0.2,0-0.2,0l-6.8-0.8l-6.6,0.7
               c0,0-0.1,0-0.1,0l-12.7-1.8c-0.1,0-0.1,0-0.2,0l-3.9-2c-0.1-0.1-0.2-0.1-0.2-0.2l-3.1-6.9l-4.2,2.5l1.7,10.7l0.6,1.5l2.3,3.9
               c0,0,0,0.1,0.1,0.1l0.4,1.7l1,1l1,0.7c0.1,0.1,0.1,0.1,0.2,0.2l0.5,1c0,0.1,0,0.2,0,0.3l-0.3,1.9c0,0,0,0.1,0,0.1l-1.2,2.8
               l-0.1,2.2l0.8,3.6l3.7,8.2l3.9,6.1l2.2,4.7l1.3,4.8c0,0.1,0,0.2,0,0.3l-0.9,3.3l-1.7,3.6l1.2,3.5l2.8,3.4l7.3,6.7l4.3,4.9
               c0,0,0,0.1,0.1,0.1l3.1,5.9c0,0,0,0.1,0,0.1l1.2,5.9c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.1-0.5,0-0.6-0.1L61,646l2.3,3.3l10.4,8.1l1.5,0
               l1.4-0.5c0,0,0.1,0,0.1,0l1.3-0.1c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0l1.6,0.7l0,0l6.4-16L85.9,635z"
                  />
                  <path
                    className="st12"
                    d="M369,232.1l-0.7-1.2l-0.3-0.4l0,0l-0.7,0l-9.1-1.4c-0.1,0-0.1,0-0.2-0.1l-14.8-8.9l-2.6,0.6l-1.8,4.6
               c0,0.1-0.1,0.1-0.1,0.2l-4,3.7c-0.1,0.1-0.3,0.1-0.3,0.1l-5.3,0c-0.1,0-0.1,0-0.2,0l-6.7-2.6l-12.2-3.1c0,0-0.1,0-0.1,0l-5.3-2.6
               c0,0-0.1,0-0.1-0.1l-1.7-1.3l0,0l-3.3,3.5l-0.3,3.2c0,0,0,0.1,0,0.1l-1.9,5c0,0.1-0.1,0.2-0.2,0.2l-6,3.8l-2.3,3.8l-1,4.1
               c0,0.1-0.1,0.1-0.1,0.2l-2.5,3c0,0.1-0.1,0.1-0.2,0.1l-2.6,1.4l-0.9,1.5c0,0.1-0.1,0.1-0.1,0.1l-2,1.4l1,4.8l0.2,3
               c0,0.2-0.1,0.4-0.3,0.5l-4.2,2l-5.4,1.8l-2.7,2.1l0.2,7.6l2.1,2.3l4.2,2.7c0.1,0.1,0.2,0.2,0.2,0.3l1.2,3.7c0,0.1,0,0.1,0,0.2
               l-0.2,3.1c0,0.1,0,0.2-0.1,0.3l-6.5,8.4l-4.1,8.6l-1.8,5.9l1.6,2.5l1.5,3.7c0,0.1,0,0.1,0,0.2l-0.5,6.1l-1.3,8.1l-2.5,7.2l-3.1,6.9
               l-2,5.6l-0.2,2.9c0,0.1,0,0.2-0.1,0.2l-4.5,7.4l1.6,3l2.5,3.2c0,0.1,0.1,0.1,0.1,0.2l1,4.4l0.8,5.9c0,0,0,0.1,0,0.1l-1,6.8
               l-2.6,10.3l-1.3,4.1c0,0.1-0.1,0.2-0.2,0.3l-3.6,2.6c0,0-0.1,0-0.1,0.1l-6.1,2.2l-3,3.9l-1.1,6.8c0,0.1-0.1,0.2-0.2,0.3l-4.3,3.8
               c-0.1,0.1-0.2,0.1-0.3,0.1l-6,0.2l-5.8,1.3l-4,3l-1.1,3.2l-1.2,2l1.3,4.8c0,0.2,0,0.4-0.1,0.5l-2.5,2.3c0,0-0.1,0-0.1,0.1l-4.5,2.6
               l0,0l0,0l1.4,4.3c0,0.1,0,0.3,0,0.4l-2.4,4c-0.1,0.1-0.1,0.2-0.2,0.2l-4.4,1.9l-1,2.3l0.7,2.9l4.3,2.8l5.2,4.2
               c0.1,0.1,0.1,0.1,0.2,0.2l2.2,6.2c0,0,0,0.1,0,0.1l0.3,2l0.3,1.7l0.6,4.2l4,6.3l6.1,2.2l5,2.3c0,0,0.1,0.1,0.1,0.1l3.9,3.8l5,0.7
               l4.6,1.3c0.1,0,0.2,0.1,0.3,0.2l7.4,12.9l9.3,7.7l6.3,0.9l4.9-2.8l0.7-4.8l-0.1-5.4c0-0.1,0-0.2,0.1-0.2l2.6-4.9l3.8-10.7l3-6.3
               l1.9-6.7l2.2-5.4l2.8-4.3l2.9-5.4l-0.5-5.4l-1.4-5.5c0-0.1,0-0.3,0.1-0.4l3.1-4.4c0-0.1,0.1-0.1,0.2-0.2l8.7-4.2
               c0.1-0.1,0.2-0.1,0.4,0l2.3,0.7l8.9-51.4c0,0,0-0.1,0-0.1l3.9-7.9l6.5-32.4l5.2-13.9l2.6-13.1l0.3-5.1l0.6-2.9c0-0.1,0-0.1,0.1-0.2
               l2.9-4.6l0.8-2.8l0-2.4l-0.6-0.9l-1-0.8c0,0-0.1-0.1-0.1-0.1l-1.2-1.8c0,0,0-0.1-0.1-0.1l-1.5-4.2c0,0,0-0.1,0-0.1l-0.2-3.8
               c0-0.1,0-0.1,0-0.2l1.2-3.6c0,0,0-0.1,0.1-0.1l6-8.7l2.3-9.8c0,0,0-0.1,0-0.1l2.3-4.9c0-0.1,0.1-0.1,0.1-0.1l2-2l5.4-4.1l0.5-0.9
               l-0.5-1.5c-0.1-0.2,0-0.3,0.1-0.5l1.2-1.6c0,0,0.1-0.1,0.1-0.1l3.7-3l5-7l4.7-4.6l1-1.7l-0.1-0.6L369,232.1z"
                  />
                  <path
                    className="st13"
                    d="M206.4,112.7l4.5,2.4c0,0,0.1,0.1,0.1,0.1l3.1,3.1c0,0,0.1,0.1,0.1,0.1l1.5,3c0.1,0.1,0.1,0.2,0,0.4l-0.8,3
               c0,0.1-0.1,0.2-0.2,0.3l-1.9,1.1c-0.1,0-0.1,0-0.2,0.1l-4.1,0.7l-4.6,1.9l-2.7,3.3l-1.8,4.5c0,0,0,0.1-0.1,0.1l-1.8,2.2l3.5,8.6
               l3,3.5l4.8,3.6l9.8,4.6c0,0,0.1,0,0.1,0.1l3.1,2.7c0.1,0.1,0.1,0.2,0.2,0.3l0.6,4.3c0,0,0,0.1,0,0.1l-0.3,3.2l-0.7,2.8l-0.8,2.4
               l0.7,2.2l0.8,3.2c0,0.1,0,0.2,0,0.2l-1,3.8l-0.6,3.6l2.7,0.7l6.1-1.7c0,0,0.1,0,0.1,0l5.5-0.4l3.8,0.4l10.1-2.6
               c0.2,0,0.3,0,0.4,0.1l4.1,3.2c0.1,0.1,0.1,0.2,0.2,0.2l1,3.5l2.6,2.5c0,0,0.1,0.1,0.1,0.1l3.7,6.3c0,0.1,0.1,0.1,0.1,0.2l0.4,3.1
               c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1l8.6-0.8c0.1,0,0.1,0,0.2,0l1.9,0.5l3.4-8.1c0-0.1,0.1-0.1,0.1-0.2l11.3-11.4l2.9-4.5l-0.4-3.4
               c0-0.1,0-0.1,0-0.2l1.1-3.8l1.7-4.9l0,0l-3.5-1.6l-5.9-3.4l-3.2-2.3l-4.4-0.8c-0.1,0-0.1,0-0.2-0.1l-5-3l-4.2-3.2
               c-0.1-0.1-0.2-0.2-0.2-0.3l-0.5-3.5c0-0.1,0-0.3,0.1-0.4l3.7-5.2l1.5-6.1l-1.3-5.8l-0.3-3.9l-2.6-2l-3.4-1.7
               c-0.1,0-0.2-0.1-0.2-0.2l-2.1-3.6l-2.5-2.6l-2.9,0.2c0,0-0.1,0-0.1,0l-3.1-0.6c-0.1,0-0.2-0.1-0.3-0.1l-2.5-2.5l-3.3-2.4l-5.2-1.7
               c-0.1,0-0.2-0.1-0.2-0.1l-2.8-3c-0.1-0.1-0.2-0.3-0.1-0.4l0.9-4.5l-2.7-3.1l-5.4-1.8l-3.4-1.6l-3.4-1l-4.1-1.6
               c-0.1,0-0.2-0.1-0.3-0.3l-3.2-6.9l-3.5-2.4l-10.9,0.8c-0.1,0-0.1,0-0.2,0l-2.2-0.8l0,0l-1.4,2.3l-1.8,4.9l-0.5,2.2l0.2,0.9
               c0,0.2-0.1,0.5-0.3,0.6l-2,0.7l-2,1.7l-1.6,2.2l-0.7,2.3l-0.5,3.1c0,0.1,0,0.1-0.1,0.2l-0.9,1.4l6.2,2.7L206.4,112.7z"
                  />
                  <path
                    className="st14"
                    d="M187.6,135.1c0.1,0,0.1,0.1,0.1,0.1l2.1,2.9l3.3,1.3l3.5-0.9l2-2.4l1.8-4.5c0,0,0-0.1,0.1-0.1l2.8-3.5
               c0.1-0.1,0.1-0.1,0.2-0.1l4.7-1.9c0,0,0.1,0,0.1,0l4.1-0.7l1.6-0.9l0.7-2.6l-1.4-2.7l-3-3l-4.3-2.3l-12.1-3.8l-6.5-2.8l-1.1,1.2
               l-1.1,2.1l0.8,1.6l0.6,1.5c0,0.1,0,0.1,0,0.2l0,1.4c0,0.1,0,0.2,0,0.2l-0.6,1.3l-1.8,2.5l-4.5,9.1l-0.8,2.8l5.2,2L187.6,135.1z"
                  />
                  <path
                    className="st15"
                    d="M27.4,455.3l-4.4,0l-2.6,0.2l-1.8,4.2l0,2.1l1.5,0.1l1.4,0.3l1.6-1.2c0.1-0.1,0.3-0.1,0.5-0.1
               c0.2,0.1,0.3,0.2,0.3,0.3l0.7,2.6c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.1l-1-0.3l-2.5,1.1c-0.1,0-0.1,0-0.2,0l-0.8,0.1
               l2.1,0.8l7.1,1l5.7,1.5l4.7-2.1l1.9-3.9c0-0.1,0.1-0.2,0.2-0.2l4.7-2.9l5.3-4.1l3.7-3.8l5-3.7c0,0,0.1,0,0.1-0.1l6.3-2.8
               c0,0,0.1,0,0.1,0l12.3-2.3l6.9-0.4c0.1,0,0.1,0,0.2,0l5.8,1.9c0,0,0.1,0,0.1,0l3.3,2c0.1,0,0.1,0.1,0.2,0.2l1.7,3.4l1.4,4.1
               l7.9,8.1c0.1,0.1,0.1,0.2,0.1,0.3l0.8,6.1c0,0,0,0.1,0,0.1l-1.4,11.4l1.2,3.4l3.4,2.6l2.8,0h0l4.3-1.9c0,0,0.1,0,0.1,0l4.1-0.5
               c0.1,0,0.1,0,0.2,0l3,0.9l0,0l6.1,0.7h0l0,0l-0.7-4.7l-1.2-3.6c0-0.1,0-0.1,0-0.2l0.1-4c0-0.1,0.1-0.2,0.1-0.3l2.9-2.9
               c0.1-0.1,0.3-0.2,0.4-0.1l5.5,0.6l4.6-0.5l9.8-5.8l3.6-4.3c0,0,0.1-0.1,0.1-0.1l6.5-4.9l6.2-3.5l3.3-4l2.9-5.5
               c0-0.1,0.1-0.1,0.1-0.2l6.8-5.5c0,0,0.1,0,0.1-0.1l13.5-6.9l0,0l-19.8-0.1l-6.3-1.1c-0.2,0-0.3-0.2-0.4-0.4l-0.9-3.1
               c0,0,0-0.1,0-0.1l-0.3-4.6L166,414l-1-4c0-0.1,0-0.3,0.1-0.4l2.4-4.1l0.3-3.8l-3.9-2.1l-3.3-0.9l-5.4-2.1l-4.8-0.5l-0.3,3.5l0,2.8
               c0,0.2-0.1,0.4-0.3,0.5l-3.2,1.1l-9.6,1.9l-5.2,0.5c-0.2,0-0.4-0.1-0.5-0.2l-1.9-3.1l-3.6-2.5l-6.5,1.9l-3.1,0.4
               c-0.1,0-0.2,0-0.2,0l-10.2-3.8c-0.1,0-0.2-0.1-0.2-0.1l-4.1-4.8l-4.1-3.6l-5.4,0.3l-10.2,1.9l-5.7,1.6l-13.1,7.6l-3,3
               c0,0-0.1,0.1-0.1,0.1l-3.6,1.9l-5.6,4.6c-0.1,0.1-0.2,0.1-0.2,0.1l-4.1,0.6l-1.5,2.2l-1.3,3.9c0,0.1-0.1,0.2-0.2,0.2l-3.2,2.5
               c0,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-4.9,0c-0.1,0-0.2,0-0.2-0.1l-6.6-3.7l-8.3,0.9c-0.1,0.1-0.2,0.1-0.3,0.1l-0.3,0
               v0l0.1,6.1l6.4-0.4c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.1,0.4,0,0.5l-3.2,4.2l-0.7,2c0,0.1,0,0.1-0.1,0.2l-1.3,1.6l-0.2,0.9l2.1,1
               c0.2,0.1,0.3,0.3,0.3,0.4v1.6c0,0.1,0,0.2-0.1,0.2l-1.4,2.7l3.3,6.3l3,8.5c0.1,0.2,0,0.3-0.1,0.5C27.7,455.2,27.6,455.3,27.4,455.3
               z"
                  />
                  <path
                    className="st16 "
                    d="M68.3,344.8l6.2,0.3c0,0,0.1,0,0.1,0l5.4,1.5l9.4,3.6l15.9,1.8c0.1,0,0.1,0,0.2,0l9.8,4.8l4.6-0.1c0,0,0,0,0,0
               c0,0,0.1,0,0.1,0l9.5,1.9l0.7-0.5l0,0l1.9-1.3l2-1.8c0,0,0.1-0.1,0.1-0.1l2.9-1.2l0.6-2.2l0,0l-3.4-1.7l-0.7-0.4l-3.1-1.1
               c-0.1,0-0.1-0.1-0.2-0.1l-3-2.7c-0.1-0.1-0.1-0.1-0.1-0.2l-1.6-5.1c0-0.1,0-0.1,0-0.2l0.7-10.9l0.9-5.4l0.1-4.5c0,0,0-0.1,0-0.1
               l1.3-4.4l1.6-3.6l-0.4-3.1c0-0.1,0-0.2,0-0.3l1-2.4c0.1-0.1,0.2-0.2,0.3-0.3l3.1-1.1l0-3.4l-4.1-2.7l-3.4-0.6
               c-0.2,0-0.3-0.2-0.4-0.3l-1-2.7c0-0.1,0-0.1,0-0.2l0-3.1l-1.6-3.1L121,284l-3.4-2.8l-9.5-2.8c-0.1,0-0.2-0.1-0.2-0.2l-3.6-4.4
               c-0.1-0.1-0.1-0.2-0.1-0.3l-0.8-6.1l-2.1-5l-3.1-2.7l-4.3-1.4l-9,10.5l-2.1,2l-0.7,2.1l-0.5,8.1c0,0.1,0,0.1,0,0.2l-1,2.5
               c0,0.1-0.1,0.2-0.2,0.2l-4.1,3.2l-0.9,2.1l-0.5,2.3c0,0.1-0.1,0.2-0.1,0.3l-1.3,1.2c0,0-0.1,0.1-0.1,0.1l-1.8,0.9l-2,1.3l-2.3,2.3
               l-2.2,3.7l-4.6,13l-3.4,6.3l-2.2,6.2c0,0,0,0.1-0.1,0.1l-1.7,2.3l-5.7,5.5l-0.9,2.3l-1.3,5.7c0,0,0,0.1,0,0.1l-0.4,0.7l5.6,3.2
               L68.3,344.8z"
                  />
                </g>
                <g id="Dots__x26__star"></g>
                <g id="Text"></g>
              </svg>
              {/* <!------------台北icon------------> */}
              <PopconfirmTPE />
              <PopconfirmTYN />
              <PopconfirmCWS />
            </div>
          </div>
        </div>
        {/* <!------------分店預約卡------------> */}
        <div className="container-fluid branch-container-fluid">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <div class="card">
                  <div className="shopName d-flex justify-content-center align-items-center">
                    <p className="h5">台北新光店</p>
                  </div>
                  <div class="card-body">
                    <div className="my-3 d-flex ">
                      <p>03-2189658</p>
                    </div>
                    <div className="my-3 d-flex ">
                      <p>桃園市中壢區新生街226巷8弄5號</p>
                    </div>
                    <div className="my-1 d-flex ">
                      <p>Mon - Fri : 10 am to 8 pm</p>
                    </div>
                    <div className="my-1 d-flex ">
                      <p>Sat : 9 am to 7 pm</p>
                    </div>
                    <div className="my-1 d-flex ">
                      <p>Sun : 10 am to 6 pm</p>
                    </div>
                    <a className="AppointmentButton" href="#/">
                      立即預約
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#/" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#/" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingMap;
