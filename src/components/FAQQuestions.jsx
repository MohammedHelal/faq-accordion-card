import PropTypes from "prop-types";
import { useState } from "react";

function FAQQuestions({ question, answer }) {
  const [expand, setExpand] = useState(false);

  function clickHandler() {
    setExpand((expand) => !expand);
  }

  const imgClass = expand ? "rotate" : "";
  const questionClasses = "faq-questions " + (expand ? "bold" : "");

  return (
    <>
      <p className={questionClasses} onClick={clickHandler}>
        {question}
        <img
          className={imgClass}
          src="./images/icon-arrow-down.svg"
          alt="arrow down"
        />
        {expand && <span className="expand">{answer}</span>}
      </p>
    </>
  );
}

FAQQuestions.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  expand: PropTypes.bool,
  onClick: PropTypes.func,
};

export default FAQQuestions;
