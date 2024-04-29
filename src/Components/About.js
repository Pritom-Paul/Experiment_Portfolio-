import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
              Hi, my name is <b>Pritom Paul</b> and I am from Dhaka, Bangladesh.
              I'm a <b>software developer</b> and I graduated with a degree in <b>Computer Science and Engineering</b> from Brac University in Summer 2023. <br/><br/>
              I thrive on diving deep into the realms of code, constantly expanding my skill set while exploring new horizons. My interests even extend to the fascinating world of <b>Robotic Process Automation (RPA)</b>, where I've found innovative ways to optimize processes and boost efficiency.<br/><br/>
              Passionate about making a meaningful impact in the <b>tech industry</b>, I enjoy the challenge of pushing boundaries and crafting solutions that truly make a difference.<br/><br/>
              Every day presents an opportunity for growth and learning, and I'm always excited about the next big challenge that awaits.<br/>
              I am <b>open</b> to new collaborations or work opportunities where I can contribute and continue to grow. Feel free to connect with me!
          </p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About