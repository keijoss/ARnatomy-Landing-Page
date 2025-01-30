import React from "react";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import "./App.css";

import laptopImage from "./assets/girl_laptop.png"; 
import quizImage from "./assets/boy_laptop.png";
import tab from "./assets/HomeScreen.png";
import bgImage from "./assets/cloudlong.svg";
import gracia from "./assets/gracia1.png";
import mj from "./assets/mj1.png";
// import logoImage from "./assets/LOGO_APP 1.png";

const  handleDownload = (req, res) => {
  // open browser window
  alert("Download");
};


const App = () => {
  return (
    <div>
      
      <Header />
      {/* <img src={logoImage} alt="logo" className="logo" /> */}
      <img src={bgImage} alt="background" className="bg-image" />
      
      <main>
        {/* Intro Section */} 
        
        {/* flex direction is row */}
        <div style={{display: "flex", flexDirection: "row", marginBottom: 0}}>
          <div style={{flex: 1, width: "80%"}}>
            <section className="text-center">
        
              <h2>Augmented Reality for Teaching Anatomy Education</h2>
              <p>
              ARnatomy uses augmented reality to make anatomy education interactive and engaging for grade-level learners, bringing the human body to life in a whole new way.
              </p>
                <button onClick={handleDownload}>DOWNLOAD NOW</button>
            </section>
          </div> 

          <div className="tab-container">
            <img src={tab} alt="tab" className="tab" />  
          </div>

        </div>

        <div className="features">

        <div><h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '40', textAlign: 'center '}}>Main Features</h1></div>
          {/* Cards Section */}
        <section className="grid">
          <SectionCard
            image={laptopImage}
            title="Interactive Lessons"
            description="Explore anatomy with interactive lessons! Learn about the reproductive systems, human organs, and more."
          />  
          <SectionCard
            image={quizImage}
            title="Quizzes & Personalized Learning"
            description="Test your knowledge with quizzes and get personalized lessons tailored for Grade 5 students."
          />
        </section>
        </div>

        {/* About our App */}
        <div className="features">
          <div><h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '40', textAlign: 'center '}}>About our App</h1></div>
          {/* app description */}
          <section className="grid">
            {/* <div>
              <h2>What is ARnatomy?</h2>
            </div> */}
            <div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20', textAlign: 'justify '}}>What is ARnatomy?</h2>
            <p style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '20', textAlign: 'justify '}}>
              ARnatomy is an augmented reality app that uses interactive 3D models to teach anatomy to grade-level students. Our app aims to make learning fun and engaging, allowing students to explore the human body in a whole new way.
              </p>
            </div>
          </section>
        </div>

        {/* the developers */}
        <div className="features">

        <div><h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '40', textAlign: 'center '}}>The Developers</h1></div>
          {/* Cards Section */}
        <section className="grid">
            <div className="card">
              <img src={gracia} alt="developer" />
              <div className="flex-col">

                <h3>Ma. Gracia Jra Villanueva</h3>
                <p>Developer</p>
              </div>
            </div>
            <div className="card">
              <img src={mj} alt="developer" />
              <div className="flex-col">
              <h3>Mj Estepanie Palo</h3>
              <p>Developer</p>
              </div>
            </div>
          
        </section>
        </div>
      {/* footer */}
      <footer>
        <div className="footer">
          <p>&copy; 2021 ARnatomy. All rights reserved.</p>
        </div>
      </footer> 
        
      </main>
    </div>
  );
};

export default App;
