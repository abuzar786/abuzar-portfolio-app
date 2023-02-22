import { useEffect } from "react";
import HeaderImage from "../../assets/header-2.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Profile Image" />
        </div>
        <h3 data-aos="fade-up">Muhammad Abuzar</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>

        <div className="header__cta" data-aos="fade-up">
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
