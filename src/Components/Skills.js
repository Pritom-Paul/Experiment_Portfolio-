import React from 'react';
import { FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCsharp, SiHtml5, SiMysql, SiPandas, SiPhp, SiPostgresql, SiPython, SiSelenium, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Python: <SiPython />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    MySql: <SiMysql />,
    Selenium: <SiSelenium />,
    PostgreSql: <SiPostgresql />,
    Pandas: <SiPandas />,
    CSS: <SiCsharp />,
    HTML: <SiHtml5 />,
    PHP: <SiPhp />,
    Npm: <FaNpm />,
    Vercel: <SiVercel />
  };

  const handleClick = () => {
    const urls = {
      'Python': 'https://www.python.org/',
      'React': 'https://reactjs.org/',
      'Javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      'Git': 'https://git-scm.com/',
      'Github': 'https://github.com/',
      'MySql': 'https://www.mysql.com/',
      'Selenium': 'https://www.selenium.dev/',
      'PostgreSql': 'https://www.postgresql.org/',
      'Pandas': 'https://pandas.pydata.org/',
      'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      'PHP': 'https://www.php.net/',
      'Npm': 'https://docs.npmjs.com/',
      'Vercel': 'https://vercel.com/'
    };
    const url = urls[skill];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div title={skill} className='SkillBox' onClick={handleClick}>
      {icon[skill]}
    </div>
  );
};

export default Skills;
