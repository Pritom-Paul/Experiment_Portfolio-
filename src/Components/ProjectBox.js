import React from 'react';
import {FaGithub} from "react-icons/fa";



const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PortfolioDesc : "Crafted with passion and purpose, this website is my digital masterpiece—an immersive showcase of my journey, passions, and achievements. Dive into my world and discover the essence of who I am, from my portfolio to my personal insights, all in one place.",
    PortfolioGithub : "https://github.com/Pritom-Paul/Experiment_Portfolio-",
    

    WebotDesc : "Experience innovation with my Webot-powered bot: equipped with sensors, it navigates autonomously, effortlessly avoiding obstacles. Witness the future of robotics in action.",
    WebotGithub : "https://github.com/Pritom-Paul/Webot",
    

    // NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    // NewsletterGithub:"",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    // WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    // WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    // WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox