import React from 'react';
import {FaGithub} from "react-icons/fa";



const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PortfolioDesc : "My digital masterpiece, showcasing my journey, passions, and achievements. Dive into my world and discover more about me.",
    PortfolioGithub : "https://github.com/Pritom-Paul/Experiment_Portfolio-",
    

    WebotDesc : "Autonomous navigation with sensors, avoiding obstacles. Witness the future of robotics.",
    WebotGithub : "https://github.com/Pritom-Paul/Webot",

    GamestoreDesc : "GameStore where users can browse games, add to cart and checkout. Supports two types of users: Admins and Regular Users, each with their own dashboard functionalities.",
    GamestoreGithub : "https://github.com/Pritom-Paul/Ultimatum-Gamestore",
    

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