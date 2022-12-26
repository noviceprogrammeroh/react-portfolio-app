import React from 'react'


const styles = {
  backgroundElement: {
    margin: '2px',
    position: 'fixed',
    height: '100%',
    background: 'black',
    top: '205px',
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',



  }
}


const projectInfo = {
//   imageUrl: "/Assets/smartcity.png",
  projectTitle: "Weather App",
  description: "This is weather app that shows current weather in your area",
  gitHubLink: "https://github.com/noviceprogrammeroh/02-challenge-repository",

}



export default function Project() {
  return (
    <div>
      <div id="main-div" className="p-3 mb-2 text-white" style={styles.backgroundElement} >
       </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            {/* <img  className="card-img-top" src= {projectInfo.imageUrl} alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">{[projectInfo.projectTitle]}</h5>
                <p className="card-text">{[projectInfo.description]}</p>
                <h5>Github</h5>
                <a className="card-text">{[projectInfo.gitHubLink]}</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
