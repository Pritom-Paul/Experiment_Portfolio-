import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pritom Paul</h4>
      {/* <h4>Copyright &copy; 2023 DS</h4> */}
      <div className='footerLinks'>
        <a href="https://github.com/Pritom-Paul" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pritom-paul-30b40a228/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:pritompaul98official@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/Paul_Is_Coding/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer