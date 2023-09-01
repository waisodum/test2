import React from 'react';
import Nav from '../components/navbar/Nav/Nav';

const Mangal = () => {
  return (
    <>
      <div className="c3 m1">
        <div className="c-main-1 ">
          <div className="c-heading ">
            <h1 className="heading">Mission-Mangal</h1>
          </div>

          {/* <div className="c-img">

            <img src="/images/c-img.jpg" alt="" className='c-img' />
        </div> */}
        </div>
        <div className="c3-content">
          <div className="c3Left">
            <img src="/images/m-rocket.jpg" alt="" className="c3-img" />
          </div>
          <div className="c3Right">
            <h1 className="subHeading">About PSLV Rocket</h1>
            <h3>
              The Launch Vehicle Mark-3 or LVM3 (previously referred as the
              Geosynchronous Satellite Launch Vehicle Mark III or GSLV Mk III)[
              is a three-stage medium-lift launch vehicle developed by the
              Indian Space Research Organisation (ISRO). Primarily designed to
              launch communication satellites into geostationary orbit, it is
              also due to launch crewed missions under the Indian Human
              Spaceflight Programme.[17] LVM3 has a higher payload capacity than
              its predecessor
              <br /> <br />
              The LVM3 has launched CARE, India's space capsule recovery
              experiment module, Chandrayaan-2 and Chandrayaan-3 , India's
              second and third lunar missions, and will be used to carry
              Gaganyaan, the first crewed mission under Indian Human Spaceflight
              Programme. In March 2022, UK-based global communication satellite
              provider OneWeb entered into an agreement with ISRO to launch
              OneWeb satellites aboard the LVM3 along with the PSLV, due to the
              launch services from Roscosmos being cut off, caused by the
              Russian Invasion of Ukraine
            </h3>
          </div>
        </div>
        <div className="c3-content">
          <div className="c3Left">
            <img src="/images/m-rover.jpeg" alt="" className="c3-img c3-img-1" />
          </div>
          <div className="c3Right">
            <h1 className="subHeading">
              Rover for mangalyaan
            </h1>
            <h3>
              The Pragyan rover Wednesday morning clicked a photograph of the
              Vikram lander with the help of its navigation camera, the Indian
              Space Research Organisation (ISRO) said in a tweet along with the
              caption “Smile, please!”.
              <br /> <br />
              Sharing the photographs through its official handle on X (formerly
              Twitter), ISRO said, “Pragyan Rover clicked an image of Vikram
              Lander this morning. The ‘image of the mission’ was taken by the
              Navigation Camera onboard the Rover (NavCam).”
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mangal;