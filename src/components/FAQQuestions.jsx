import PropTypes from "prop-types";
import { useState } from "react";

function FAQQuestions({ question, answer }) {
  const [expand, setExpand] = useState(false);

  function clickHandler() {
    setExpand((expand) => !expand);
  }

  const imgClass = "downarrow " + (expand ? "rotate" : "");
  const questionClasses = "faq-questions " + (expand ? "bold" : "");
  const answerClasses = expand ? "expand" : "initial-state";

  return (
    <div className="qna-container" onClick={clickHandler}>
      <div className="flex">
        <p className={questionClasses}>{question}</p>
        <img
          className={imgClass}
          src="./images/icon-arrow-down.svg"
          alt="arrow down"
        />
      </div>
      <p className={answerClasses}>{answer}</p>
    </div>
  );
}

FAQQuestions.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  expand: PropTypes.bool,
  onClick: PropTypes.func,
};

export default FAQQuestions;
