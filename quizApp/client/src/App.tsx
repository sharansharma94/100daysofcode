import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "sadfsdfsdffasfaasdfsd ?",
      options: ["asdfasdf", "asdfasdf", "asdfsssss", "bbbbbbbbb"],
      answer: "asdfasdf",
    },
    {
      question: "sadfsdfsdffasfaasdfsd ?",
      options: ["asdfasdf", "asdfasdf", "asdfsssss", "bbbbbbbbb"],
      answer: "asdfasdf",
    },
    {
      question: "sadfsdfsdffasfaasdfsd ?",
      options: ["asdfasdf", "asdfasdf", "asdfsssss", "bbbbbbbbb"],
      answer: "asdfasdf",
    },
    {
      question: "sadfsdfsdffasfaasdfsd ?",
      options: ["asdfasdf", "asdfasdf", "asdfsssss", "bbbbbbbbb"],
      answer: "asdfasdf",
    },
  ]);

  const [current, setCurrent] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <header></header>
        <main>
          <Card>
            <div className="questions">
              <div className="timer">
                <div className="progress">18</div>
              </div>
              <div className="score">
                <div className="correct">01</div>
                <div className="incorrect">02</div>
              </div>
              <div className="question-number">
                question {current + 1} / {questions.length}
              </div>
              <div className="question">{questions[current].question}</div>
            </div>
          </Card>

          <div className="options">
            {questions[current].options.map((option) => (
              <div> {option} </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
