import logoImage from "../assets/LOGO_APP.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logoImage} alt="logo" className="logo" />
        {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;