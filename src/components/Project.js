import React from 'react'

import '../styles/Project.css';
import Footer from './Footer.js';
import Header from './Header.js';
import socialMedia from './../Assets/socialmedia.jpg'
import textEditor from './../Assets/kelly.jpg'
import employeeOfficeImg from './../Assets/office.jpeg'
import ecomerceImg from './../Assets/ecomerce.JPG'
import teamGeneratorImg from './../Assets/teamgenerator.jpg'
import weatherDashBoardImg from './../Assets/weatherdashboard.jpg'
import eventConcertImg from './../Assets/eventconcert.jpg'



const projectInfoSocialNetworkApp = {
//   imageUrl: "react-portfolio/src/Assets/myavatarpic.JPG"    
  projectTitle: "Social Media App",
  description: "This is a weather app that shows current weather conditions in your area",
  gitHubLink: "https://github.com/noviceprogrammeroh/Social-Network-API",
  faceBookLink:"https://www.facebook.com/"

}

const projectInfoTextEditorApp = {
  projectTitle: "Text Editor App",
  description: "This is a PWA app that runs in the browser and will load some offline functions",
  gitHubLink: "https://github.com/noviceprogrammeroh/Text-Editor-App",
  faceBookLink:"https://www.facebook.com/"

}


const projectInfoEmployeeTrackerApp = {
  projectTitle: "Employee Tracker App",
   gitHubLink: "https://github.com/noviceprogrammeroh/employee-tracker-app",
   faceBookLink:"https://www.facebook.com/"
  
}


const projectInfoEcomerceBackEndApp = {
  projectTitle: "e-comerce-back-end-app",
   gitHubLink: "https://github.com/noviceprogrammeroh/e-commerce-back-end-app",
   faceBookLink:"https://www.facebook.com/"

}


const projectInfoTeamProfileGenerator = {
  projectTitle: "Team Profile Generator",
  gitHubLink: "https://github.com/noviceprogrammeroh/team-profile-generator",
  faceBookLink:"https://www.facebook.com/"

}


const projectInfoWeatherDashboardApp = {
  projectTitle: "Weather Dashboard",
  gitHubLink: "https://github.com/noviceprogrammeroh/weather-dashboard",
  faceBookLink:"https://www.facebook.com/"


}

  const projectIIDataDay = {
    projectTitle: "Data Day -Project I",
    gitHubLink: "https://github.com/Aaronpqking/data-day",
    faceBookLink:"https://www.facebook.com/"
  
  
  }
  
export default function Project() {
  return (
    <div className='parent-div'>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='parent-div'></div>   

      <Header/>
    <div >
    </div>
      <div id='block-id'>
      <section id='section-id' className='section'>
      <br></br>
      <br></br>   
      <h3 className='h3'>Projects</h3>
      <br></br>
      <div id='row-id' className="row">
        <div id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{[projectInfoSocialNetworkApp.projectTitle]}</h5>
                <img  className="card-img-top" src={socialMedia} alt="Social Media"/>
                 <a className="card-text" href={projectInfoSocialNetworkApp.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectInfoSocialNetworkApp.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>

        <div id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{[projectInfoTextEditorApp.projectTitle]}</h5>
                <img  className="card-img-top" src= {textEditor} alt="text editor"/>
                 <a className="card-text" href={projectInfoTextEditorApp.gitHubLink}>
                 <i id="github-logo"className="fa fa-github"></i>
                 </a>
                 <a className="card-text" href={projectInfoTextEditorApp.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>

        <div  id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{[projectInfoEmployeeTrackerApp.projectTitle]}</h5>
                <img  className="card-img-top" src= {employeeOfficeImg} alt="employee tracker app"/>
                <a className="card-text" href={projectInfoEmployeeTrackerApp.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectInfoEmployeeTrackerApp.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>

        <div  id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{[projectInfoEcomerceBackEndApp.projectTitle]}</h5>
                <img  className="card-img-top" src= {ecomerceImg} alt="ecomerce app"/>
                <a className="card-text" href={projectInfoEcomerceBackEndApp.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectInfoEcomerceBackEndApp.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>

        <div  id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{[projectInfoTeamProfileGenerator.projectTitle]}</h5>
                <img  className="card-img-top" src= {teamGeneratorImg} alt="team generator app"/>
                <br></br>
                <a className="card-text" href={projectInfoTeamProfileGenerator.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectInfoTeamProfileGenerator.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>


        <div id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">

                <h5 className="card-title">{[projectInfoWeatherDashboardApp.projectTitle]}</h5>
                <img  className="card-img-top" src= {weatherDashBoardImg} alt="weather dashboard"/>
                <p className="card-text">{[projectInfoWeatherDashboardApp.description]}</p>
                 <a className="card-text" href={projectInfoWeatherDashboardApp.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectInfoWeatherDashboardApp.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>

        <div id="col-div" className="col-sm-3">
          <div className="card">
              <div className="card-body">

                <h5 className="card-title">{[projectIIDataDay.projectTitle]}</h5>
                <img  className="card-img-top" src= {eventConcertImg} alt="event concert"/>
                <p className="card-text">{[projectIIDataDay.description]}</p>
                 <a className="card-text" href={projectIIDataDay.gitHubLink}>
                <i id="github-logo"className="fa fa-github"></i>
                </a>
                <a className="card-text" href={projectIIDataDay.faceBookLink}>
                <i id="github-logo-footer"className="fa fa-facebook"></i>
              </a>
              </div>
          </div>
        </div>
      </div>
      </section>
      <Footer></Footer>
    </div>
  
    </div>

  )
}
