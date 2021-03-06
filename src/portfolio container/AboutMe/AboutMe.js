import React, { useState } from 'react';
import './AboutMe.css';
import Avatar from '../../assets/Home/avatar.png';
export default function AboutMe() {
  const [state] = useState([
    { id: 1, title: 'Name:', text: 'Atieh Amini' },
    { id: 2, title: 'Email:', text: 'attieh.amiinii@gmail.com' },
    { id: 3, title: 'Phone:', text: '+1(647)684_8489' },
    {
      id: 4,
      title: 'linkedin:',
      text: 'in/atieh_amini',
    },
  ]);
  const [header] = useState({
    subHeader: 'About Me',
    text: 'Junior Front End Developer',
  });

  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={Avatar} alt="about Me" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Jr. front-end developer with +2 years experience in hand code in web and mobile
                applications development. using an array of technologies like HTML5,CSS3,
                JavaScript, React/Redux, Typescript and NPM packages. Expert knowledge of the UI
                design process and development.Fast learner, hard worker and team player who is
                proficient in an array of scripting languages and web tools.
              </div>
              <div className="about__info-p2">
                Expert knowledge of the UI design process and development lifecycle. Strong
                knowledge of Object-Oriented JavaScript programming.
              </div>
              <div className="info__context">
                <div className="row">
                  {state.map(info => (
                    <div key={info.id} className="col-6">
                      <strong >{info.title}</strong>
                      <p >{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
