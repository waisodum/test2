import React from 'react';
import Nav from '../components/navbar/Nav/Nav';
import { useTimer } from 'react-timer-hook';
import { color } from 'framer-motion';

const Aditya = () => {
  const eventDate = new Date('2023-09-02T11:50:00');
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: eventDate,
    onExpire: () => console.log('Event has occurred!'), // You can add your own logic here when the event expires
  });
  return (
    <>
      <div className="c3 m1">
        <div className="c-main-2">
          <div className="C-heading ">
            <h1 className="heading">Aditya L1</h1>
            <div>
              <h2 className="heading">
                <div>Time to Launch</div>
                {days > 0 && (
                  <div>
                    <span>{days}</span> days{' '}
                  </div>
                )}
                <div>
                  <span>{hours}</span>:<span>{minutes}</span>:
                  <span>{seconds}</span>
                </div>
              </h2>
            </div>
          </div>
          

          {/* <div className="c-img">

            <img src="/images/c-img.jpg" alt="" className='c-img' />
        </div> */}
        </div>
        <div className="c3-content">
          <div className="c3Left">
            {/* <img src="/images/c3-rocket.jpg" alt="" className="c3-img" /> */}
          </div>
          <div className="c3Right">
            <h1 className="subHeading">About Aditya L1 </h1>

            <h3>
            Aditya L1 shall be the first space based Indian mission to study the Sun. The spacecraft shall be placed in a halo orbit around the Lagrange point 1 (L1) of the Sun-Earth system, which is about 1.5 million km from the Earth. A satellite placed in the halo orbit around the L1 point has the major advantage of continuously viewing the Sun without any occultation/eclipses. This will provide a greater advantage of observing the solar activities and its effect on space weather in real time. The spacecraft carries seven payloads to observe the photosphere, chromosphere and the outermost layers of the Sun (the corona) using electromagnetic and particle and magnetic field detectors. Using the special vantage point L1, four payloads directly view the Sun and the remaining three payloads carry out in-situ studies of particles and fields at the Lagrange point L1, thus providing important scientific studies of the propagatory effect of solar dynamics in the interplanetary medium
            </h3>
          </div>
        </div>
        <div className="c3-content">
          <div className="c3Left">
            {/* <img
              src="/images/c3-rover.jpeg"
              alt=""
              className="c3-img c3-img-1"
            /> */}
          </div>
          {/* <div className="c3Right">
            <h1 className="subHeading">
              Smile, please! ISRO shares image of Chandrayaan-3 lander Vikram
              captured by Pragyan rover
            </h1>
            <h3>
              The Pragyan rover Wednesday morning clicked a photograph of the
              Vikram lander with the help of its navigation camera, the Indian
              Space Research Organisation (ISRO) said in a tweet along with the
              caption “Smile, please!”.

            </h3>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Aditya;
