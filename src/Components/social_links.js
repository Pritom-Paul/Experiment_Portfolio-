import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import '../index.css'; // Assuming index.css contains the provided CSS styles

const SocialMediaLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/Pritom-Paul" target='_blank' rel="noreferrer"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/pritom-paul-30b40a228/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
      <a href='mailto:pritompaul98official@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      <a href="https://leetcode.com/u/Paul_Is_Coding/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  );
}

export default SocialMediaLinks;
