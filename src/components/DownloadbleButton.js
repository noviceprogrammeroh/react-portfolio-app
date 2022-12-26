import React from 'react'
import '../styles/DownloadableButton.css';

import Resume from '../components/Resume.js';

export default function DownloadbleButton() {

const downloadButton = (e) => {
    console.log("testing")
     
  
}



  return (
    <div>

     <button  className='downloadble-button' onClick={downloadButton}>Download</button>


    </div>
  )
}

