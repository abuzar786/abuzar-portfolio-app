import HeaderImage from "../../assets/header-2.png";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Profile Image" />
        </div>
        <h3>Muhammad Abuzar</h3>
        <p>
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>

        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>

        <div className="header__social">
          {data.map((dataItem) => {
            return (
              <a
                key={dataItem.id}
                href={dataItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dataItem.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
