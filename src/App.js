import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Aboutme from './components/Aboutme.js';
import Resume from  './components/Resume.js';
import { Route, Routes } from "react-router-dom";


const styles = {
    heading: {
        height: '100%',
        width: '100%',
        background: 'black',
        padding: '0px 0px 0px 0px',
        margin: '0px 0px 0px 0px'
    }
}


function App() {
  return (
   <div style={styles.heading}>
          {/* <Header/> */}
          <Routes>
          <Route path="/*" element={<Project />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
         {/* <Footer/> */}
   </div>

  );
}

export default App;
