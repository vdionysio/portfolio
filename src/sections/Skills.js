import React from 'react';
import { SiReact, SiMongodb, SiNodedotjs, SiSequelize, SiDocker } from 'react-icons/si';
import { DiJavascript1, DiCss3, DiHtml5, DiGit, DiMysql, DiHeroku } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import SkillCard from '../components/SkillCard';

const skillsObject = [
  {
    icon: <DiJavascript1 size={45} />,
    text: 'JavaScript',
    lvl: 'Intermediário'
  },
  {
    icon: <DiHtml5 size={45} />,
    text: 'HTML5',
    lvl: 'Intermediário'
  },
  {
    icon: <DiCss3 size={45} />,
    text: 'CSS3',
    lvl: 'Básico'
  },
  {
    icon: <SiNodedotjs size={45} />,
    text: 'Node.js',
    lvl: 'Intermediário'
  },
  {
    icon: <DiMysql size={45} />,
    text: 'MySQL',
    lvl: 'Intermediário'
  },
  {
    icon: <SiMongodb size={45} />,
    text: 'MongoDB',
    lvl: 'Intermediário'
  },
  {
    icon: <SiSequelize size={45} />,
    text: 'Sequelize',
    lvl: 'Básico'
  },
  {
    icon: <SiReact size={45} />,
    text: 'React.js',
    lvl: 'Intermediário'
  },
  {
    icon: <BsGithub size={45} />,
    text: 'Github',
    lvl: 'Intermediário'
  },
  {
    icon: <DiGit size={45} />,
    text: 'Git',
    lvl: 'Intermediário'
  },
  {
    icon: <SiDocker size={45} />,
    text: 'Docker',
    lvl: 'Básico'
  },
  {
    icon: <DiHeroku size={45} />,
    text: 'Heroku',
    lvl: 'Básico'
  }
];

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="skills-container">
        <h2 className="font-600">Skills</h2>
        <ul className="skills-list">
          {skillsObject.map((item) => (
            <SkillCard key={item.text} item={item} className="skill-div" />
          ))}
        </ul>
      </div>
    </div>
  );
}
