import "./card.css";

const Card = (props) => {
  return (
    <article className="card">
      <span className="about__card-icon">{props.icon}</span>
      <h5> {props.title} </h5>
      <small>{props.desc}</small>
    </article>
  );
};

export default Card;
