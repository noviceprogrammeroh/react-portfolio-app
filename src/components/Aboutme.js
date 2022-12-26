import React from 'react';
import '../styles/About.css';
import Header from './Header.js';
import Footer from './Footer.js';
import myavatarpic from './../Assets/myavatarpic.JPG'

const styles =  {
    backgroundElement :{
    textAlign: 'center',
    marginBottom: '30px',    
    position: 'static',
    height: '100%',
    background: 'black',
    top: '10px',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    // overflow: 'auto',    
  }
}

export default function AboutMe() {
  return (
    <div className='parent-div-about-me'>
    <Header/>     
    <div className="p-3 mb-2 text-white" style={styles.backgroundElement} >
      <div className='container-about-us'>
      <h1 className='h1-about-me'>About Me</h1>   
       <br></br>    
       <br></br>
         <img id="about-me-img"className='image' src={myavatarpic} alt='my-avatar-pic'></img>  
       <br></br>    
       <br></br>
       <br></br>    
       <br></br>
   
       <p className='p-about-me'>
        I'm a Junior Software Engineer that is passioned about technology and computers. 
        One of the things I like the most is coding. Knowing how a web application or single page 
        works behind scenes blows my mind. Designing, developing, testing and deploying the final product is very rewarding.        
        In my spare time I like to travel, learn languages, spend time
        with family and coding of course. My end goal is to apply my knowledge to help others by making their life easier. 
        </p>

       </div>

       </div>
       <Footer/>
    </div>

  )
}
