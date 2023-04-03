import React from 'react'
import './global.css'
import Abtns from '../Components/Abtns.jsx'
import Sidebar from '../Components/sidebar'
import Mainimg from '../assets/coding2.png'

//This is all the content of the page
let RoadmapName = 'Frontend Roadmap';
let RoadmapAbout = "Front-end development is the development of visual and interactive elements of a website that users interact with directly. It's a combination of HTML, CSS and JavaScript, where HTML provides the structure, CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity. \n As a front-end developer, you'll be responsible for creating the user interface of a website, to ensure it looks good and is easy to use, with great focus on design principles and user experience. You'll be working closely with designers, back-end developers, and project managers to make sure the final product meets the client's needs and provides the best possible experience for the end-users.";

const Frontend = () => {
  return (
    <div className='main'>
      <div className="sb">
        <Sidebar />
      </div>

      <div className="roadmap">
        <div className="top">
          <h1 className="grd-txt">{RoadmapName}</h1>
          <Abtns />
        </div>
        <div className="roadmap-cont">
          <p className='about-roadmap lb'>{RoadmapAbout}</p>
          <div className="roadmap-img">
            <img src={Mainimg} alt="example" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Frontend