import FAQQuestions from "./FAQQuestions";
//import Media from "react-media";

function Faq() {
  return (
    <div className="container">
      <div id="image-container">
        <img
          src="./images/illustration-woman-online-desktop.svg"
          id="woman"
          alt="woman online illustration"
        />
        <img
          src="./images/illustration-box-desktop.svg"
          id="box"
          alt="box desktop illustration"
        />
        <div className="shadow"></div>
        <div className="square one"></div>
        <div className="square two"></div>
      </div>
      <div id="faq-list">
        <h1>FAQ</h1>
        {faqArray.map((ele) => (
          <FAQQuestions
            key={ele.id}
            question={ele.question}
            answer={ele.answer}
          />
        ))}
      </div>
    </div>
  );
}

let faqArray = [
  {
    id: "first-q",
    question: "How many team members can I invite?",
    answer: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
  },
  {
    id: "second-q",
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "third-q",
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: "forth-q",
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: "fifth-q",
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

export default Faq;
