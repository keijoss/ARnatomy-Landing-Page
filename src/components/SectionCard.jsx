const SectionCard = ({ image, title, description }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default SectionCard;
  