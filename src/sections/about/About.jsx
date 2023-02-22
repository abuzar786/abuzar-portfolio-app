import AboutImage from "../../assets/about-2.png";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/card/Card";
import data from "./data";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building Projects of my clients love always been my passion. Being
            in the Web Development industry for over 3 years and serving more
            than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            I am a passionate and experienced web developer with a focus on
            creating dynamic, user-friendly and responsive websites and web
            applications. With a strong background in HTML, CSS, JavaScript, and
            various frameworks and CMS, I have delivered numerous successful
            projects for clients in a variety of industries. I am dedicated to
            staying up-to-date with the latest technologies and methodologies,
            and I am always looking for new challenges to improve my skills. My
            goal is to create high-quality, efficient, and innovative solutions
            that meet the needs of my clients and deliver the best user
            experience possible.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
