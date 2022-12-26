import React from 'react'

import '../styles/Footer.css';




const socialMediaLogos = {
    gitHubLink: "https://github.com/noviceprogrammeroh",
  
  }

export default function Footer() {
    return (
    <div className='container'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div  id="footer">
            This site was developed by Hector Perez ©
            <a className="card-text" href={socialMediaLogos.gitHubLink}>
                <i id="github-logo-footer"className="fa fa-github"></i>
              </a>
              <a href="https://www.facebook.com/" className="fa fa-facebook"></a>


         </div>
    </div>
    )
}
