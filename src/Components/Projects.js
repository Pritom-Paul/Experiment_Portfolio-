import React from 'react';
import ProjectBox from './ProjectBox';
import Webot from '../images/Webot.png';
import Gamestore from '../images/Gamestore.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
import Portfolio from '../images/Portfolio .png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={Webot} projectName="Webot" />
        <ProjectBox projectPhoto={Gamestore} projectName="Gamestore" />
        {/* <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" /> */}
        {/* 0<ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects