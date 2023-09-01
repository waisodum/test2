import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="">
        <div className="main-home">
          <div className="left-main">
            <img src="/images/earth.jpg" alt="" srcset="" className="earth" />
          </div>
          <div className="right-main">
            <motion.img
              src="/images/rocket.png"
              initial={{ y: 200, x: '50vw' }}
              animate={{ y: '-60rem' }}
              transition={{
                duration: 2,
                delay: 0.4,
                ease: 'easeOut',
              }}
              alt=""
              srcset=""
              className="mx-auto w-[18rem] lg:w-[35rem] rocketLogo"
            />

            <motion.div
              initial={{ x: '100vw' ,y:"10rem"}}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 2,
                ease: 'easeOut',
              }}
            >
              <h1 className="heading-1">
                Space Technology in the Service of HumanKind
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="content-home">
          <div className="">
            <h1 className="heading">Cycle Se Chand Tak</h1>
          </div>
          <div className="cycle-div">
            <div className="">
              <img src="/images/cycle.jpg" alt="" className="cycle" />
            </div>
            <div className="cycle-content">
              <h1 className="subHeading">Indian Space Research Organisation</h1>
              <h3>
                Indian Space Research Organisation (ISRO) is the space agency of
                India. The organisation is involved in science, engineering and
                technology to harvest the benefits of outer space for India and
                the mankind. ISRO is a major constituent of the Department of
                Space (DOS), Government of India. The department executes the
                Indian Space Programme primarily through various Centres or
                units within ISRO. ISRO was previously the Indian National
                Committee for Space Research (INCOSPAR), set up by the
                Government of India in 1962, as envisioned by Dr. VikramA
                Sarabhai. ISRO was formed on August 15, 1969 and superseded
                INCOSPAR with an expanded role to harness space technology. DOS
                was set up and ISRO was brought under DOS in 1972 The prime
                objective of ISRO/DOS is the development and application of
                space technology for various national needs. <br /> <br />
                To fulfil this objective, ISRO has established major space
                systemsfor communication, television broadcasting and
                meteorological services; resources monitoring and management;
                space-based navigation services. ISRO has developed satellite
                launch vehicles, PSLV and GSLV, to place the satellites in the
                required orbits. Alongside its technological advancement, ISRO
                contributes to science and science education in the country.
                
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
