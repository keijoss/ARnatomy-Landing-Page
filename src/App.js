import React from "react";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import "./App.css";

import laptopImage from "./assets/girl_laptop.png"; 
import quizImage from "./assets/boy_laptop.png";
import tab from "./assets/Apppreview.png";
import bgImage from "./assets/cloudlong.svg";
// import logoImage from "./assets/LOGO_APP 1.png";
const App = () => {
  return (
    <div>
      
      <Header />
      {/* <img src={logoImage} alt="logo" className="logo" /> */}
      <img src={bgImage} alt="background" className="bg-image" />
      
      <main>
        {/* Intro Section */} 
        
        <section className="text-center">
       
          <h2>Augmented Reality for Teaching Anatomy Education</h2>
          <p>
          ARnatomy uses augmented reality to make anatomy education interactive and engaging for grade-level learners, bringing the human body to life in a whole new way.
          </p>

          <img src={tab} alt="tab" className="tab" />           
          <button>Download</button>
          </section>

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
      </main>
    </div>
  );
};

export default App;
