const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Augmented Reality for Teaching Anatomy Education</h2>
        <p>
          ARnatomy uses augmented reality to make anatomy education interactive
          and engaging for grade-level learners, bringing the human body to
          life in a whole new way.
        </p>
        <button>Download</button>
      </div>
      <div className="hero-image">
        <img
          src="/assets/tabPreview.png"
          alt="Tablet showing ARnatomy app"
        />
      </div>
    </div>
  );
};

export default HeroSection;
