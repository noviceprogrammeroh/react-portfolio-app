import React from 'react'
import '../styles/Resume.css';
import '../styles/DownloadableButton.css'
import DownloadbleButton from './DownloadbleButton.js';
import resume from '../Resume.pdf'
import Header from './Header.js';

export default function Resume() {
  return (
<div className='parent-div-resume'>
        <Header/>          

     <header className='header'>
       <br></br>    
       <br></br>
      <h1 className='h1-resume'>Resume</h1>
      <br></br>          
      </header>   
       <br></br>    
       <br></br>
    <div className='contact-info-container'> 
        <h2 className='h2-title'>Full Stack Developer</h2>
            <p className='p-contact-info'>
                    <br></br>
                        HECTOR PEREZ<br></br>

                    hpnoemail@noemail.com<br></br>                 
                    (123)456-7890 <br></br>
                    www.linkedin.com/in/nolinkedin <br></br></p>
    
      <div className='container-resume-body'>
            <h2 className='h2-resume'>SUMMARY OF QUALIFICATIONS</h2>        
                <p className='p'>
                <br></br> 
                <ul>     
                    <li>CompTIA secure infrastructure certified technologist with four years of experience in customer service</li> 
                    <li>Working knowledgeable of object-oriented programming and application tools</li>
                    <li>Multilingual: English, Spanish, and Portuguese</li>
                </ul>       
                </p>
        
            <h2 className='h2-resume'>EDUCATION</h2>     
            <p className='p'>
            <ul>
                <li>OSU -COLLEGE OF ENGINEERING, SOFTWARE DEVELOPMENT
                    Columbus, OH </li>
                <li>Devry University -BACHELOR OF SCIENCE                                                                                         
                    COMPUTER INFORMATION SYSTEMS,
                    Columbus, OH </li>
                <li>CSCC - AAT Information Technology,        
                    Columbus OH</li>
            </ul>
            </p>  

        <h2 className='h2-resume'>ACADEMIC PROJECTS</h2>
        <p className='p'>
        <br></br>
            <ul>
                <li>Collaborated with classmates on developing a home real state page using Expres.js, SQl & Handlebars</li>
                <li>Developed a weather dashboard application using Express.js and SQL</li>
                <li>Developed a warehouse management software application using JS, Html,CSS and an API</li>
                <li>Developed a Java a calculator using OOP concepts</li>
                <li>Collaborated with classmates on developing a game using a game engine Unity and C#</li>
            <br></br> 
            </ul>
       </p>

 
       {/* <div className='button'>
        <DownloadbleButton/>
       </div> */}

        <br></br>
         <a  rel='noopener noreferrer' target="_blank" href={resume}><button className='resume-download-btn'>Download</button></a>
       </div>
    </div>
       
</div>   
  )
}
