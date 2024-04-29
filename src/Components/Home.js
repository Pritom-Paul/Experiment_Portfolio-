import React from 'react';
import Lottie from 'lottie-react';
import SpaceBoy from '../LottieFiles/SpaceBoy.json';
import Typed from './Typed';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import '../index.css';

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hello World!</h1>
          <h1>I'm <b>Pritom Paul</b></h1>
          <Typed />
        </div>
        <Lottie
          className='illustration'
          animationData={SpaceBoy}
          loop
          autoPlay
        />
      </div>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>
            Brief <b>introduction</b>
          </h1>
          <p>
            Welcome to my Profile! I'm a passionate software developer at
            AlterSense Limited, dedicated to transforming raw ideas into
            impactful products bringing them to fruition.
            <br />
            <br />
            Proficient in Python and Java, I'm currently immersed in several
            projects aimed at improving lives. My pursuit of innovation spans
            various areas of software development, allowing me to continually
            broaden my knowledge and expertise.
            <br />
            <br />
            Beyond coding, I find inspiration in video games, envisioning ways to
            infuse creativity from this realm into my future software development
            endeavors. Join me on this journey of innovation and creativity!
          </p>
        </div>
        <Tilt className='tilt' reverse={false}>
          <img className='Avatar' src={Avatar} alt='' />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;

