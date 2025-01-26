import React from "react";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import "./App.css";

import laptopImage from "./assets/girl_laptop.png"; 
import quizImage from "./assets/boy_laptop.png";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Intro Section */}
        <section className="text-center">
          <h2>Augmented Reality for Teaching Anatomy Education</h2>
          <p>
            ARnatomy uses augmented reality to make anatomy education interactive and engaging for grade-level lessons.
          </p>
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
