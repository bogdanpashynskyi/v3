import React from 'react';
import team from '../team.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <h1 className="title-new">V3 Team</h1>
        <p className="content-text"> <span className="vertical-post">|</span> First of all, We are a Team, that is composed of full-time 3 lawyers, a finance and accounting experts, as well as a network of advisors from different countries. Diversity is our main advantage. </p>
        <p className="content-text">  <span className="vertical-post">|</span>Indeed, we are young and motivated, but we despise all the clichés. We work with full dedication to the Project 24/7 and we perform an in-depth analysis in order to give the best possible result. </p>
        <p className="content-text"> <span className="vertical-post">|</span> That being said, we prefer to prove our value with our work, rather with words. </p>
      </div>
      <img className="team-pic" src={team} alt="v3team"/>
    </div>
  )
}

export default Home;