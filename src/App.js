import React from 'react';
import './App.css';
import Side from './container/Side.js';
import Main from './container/Main.js';
import Address from './components/Address.js';
import Name from './components/Name.js';
import Education from './components/Education.js';
import SocialInfo from './components/SocialInfo.js';
import Section from './components/Section.js';
import Image from './components/Image.js';
import { data } from './data.js';

export default function App() {
  return (
    <div className="App">
      <Side>
        <Address className="address-info"
          data={data.side.address} />
        <Name className="full-name"
          name={data.side.name}
          job={data.side.profession} />
        <Education className="education-info"
          title="Education"
          data={data.side.education} />
      </Side>
      <Main>
        <Image className="image2" />
        <SocialInfo />
        <Section className="career-goal"
          title="CAREER GOAL"
          content={data.main.careerGoal} />
        <Section className="expertise"
          title="EXPERTISE"
          content={data.main.expertise} />
        <Section className="personal-skill"
          title="PERSONAL"
          content={data.main.personalSkill} />
      </Main>
    </div>
  );
}

