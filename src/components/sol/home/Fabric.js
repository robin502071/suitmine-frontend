import React from 'react';
import fabric1 from '../../../images/sol/Luxury-Fabric1.png';
import fabric2 from '../../../images/sol/Luxury-Fabric2.png';

function Fabric() {
  return (
    <>
      <div className="container-fluid position-relative px-0">
        <div
          className="bg-gray"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        ></div>
        <div
          className="figure-outer-fabric1 d-flex justify-content-around align-items-center"
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          <figure className="fabricClass1-outer">
            <img className="fabricClass1" src={fabric2} alt="" />
          </figure>
          <figure className="fabricClass2-outer">
            <img className="fabricClass2" src={fabric1} alt="" />
          </figure>
          <div className="figure-text d-flex flex-column justify-content-center align-items-center">
            <h2 className="figure-text-inner">嚴選頂級布料</h2>
            <h2 className="figure-text-inner">職人手工縫製</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fabric;
