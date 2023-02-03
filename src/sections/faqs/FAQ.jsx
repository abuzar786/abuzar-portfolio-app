import Card from "../../components/card/Card";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = ({ faq }) => {
  return (
    <Card className={faq}>
      <div className="faq__question-div">
        <h5 className="faq__question">{faq.question} </h5>
        <button className="faq__icon">
          <AiOutlinePlus />
        </button>
      </div>
      <p className="faq__answer">{faq.answer} </p>
    </Card>
  );
};

export default FAQ;
