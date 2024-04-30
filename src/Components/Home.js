import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import SocialMediaLinks from './social_links.js';

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello World!</h1>
          <h1>I'm <b>Pritom Paul</b></h1>
          <Typed/>
        </div>

        <div className="SocialMediaLinks">
          <SocialMediaLinks/>
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Welcome! I'm a Software Developer at AlterSense Limited, passionate about bringing ideas to life. Proficient in Python and Java, I'm immersed in projects to better lives. I draw inspiration from gaming, seeking to merge creativity with coding. I'm also inspired by AI, aspiring to evolve into a state of cyborg and push the boundaries of technological evolution.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt=""/>
        </Tilt>
      </div>
    </div>
  )
}

export default Home
