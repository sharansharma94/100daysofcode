import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "sadfsdfsdff asfaas ____________ dfsd ?",
      options: ["asdfasdf", "asdfasdf", "asdfsssss", "bbbbbbbbb"],
      answer: "bbbbbbbbb",
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
  const [touched, setTouched] = useState([-1, -1, -1, -1]);

  interface Option {
    question: string;
    options: string[];
    answer: string;
  }

  const handleTouched = (index: number, correctAnswer: boolean) => {
    touched[index] = correctAnswer ? 1 : 0;
    setTouched([...touched]);
  };

  const correctAnswer = (e: any, option: Option, idx: number) => {
    if (e.target.innerText === option.answer) {
      handleTouched(idx, true);
      return true;
    }
    handleTouched(idx, false);
    return false;
  };

  const getClassNameForOption = (idx: number) => {
    return touched[idx] < 0 ? "" : touched[idx] ? "right" : "wrong";
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
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
              <div className="flex-center">
                <div className="question-number">
                  question <span>{current + 1}</span> / {questions.length}
                </div>
                <div className="question">{questions[current].question}</div>
              </div>
            </div>
          </Card>

          <div className="options">
            {questions[current].options.map((option, idx) => (
              <div
                className={`option ${getClassNameForOption(idx)}`}
                onClick={(e) => correctAnswer(e, questions[current], idx)}
                key={idx}
              >
                {option}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
