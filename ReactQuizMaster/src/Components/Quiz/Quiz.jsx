import React from "react";
import "./Quiz.css"; // Importing CSS styles for the Quiz component
import { data } from "../../assets/data"; // Importing quiz data from an external file
import { useState, useRef } from "react"; // Importing useState and useRef hooks from React

const Quiz = () => {
  // Initializing state variables using useState hook
  let [index, setIndex] = useState(0); // Index of current question
  let [question, setQuestion] = useState(data[index]); // Current question object
  let [lock, setLock] = useState(false); // Flag to lock options after an answer is selected
  let [score, setScore] = useState(0); // Score of the user
  let [result, setResult] = useState(false); // Flag to indicate if the quiz is finished

  // References to DOM elements for each option
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let options_array = [Option1, Option2, Option3, Option4]; // Array to store option refs

  // Function to check the selected answer
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1); // Increment score if answer is correct
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        options_array[question.ans - 1].current.classList.add("correct"); // Highlight correct answer if wrong answer selected
      }
    }
  };

  // Function to move to the next question
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true); // If last question, set result to true to display score
        return 0;
      }
      setIndex(++index); // Move to the next question
      setQuestion(data[index]); // Set new question
      setLock(false); // Unlock options
      options_array.map((option) => {
        option.current.classList.remove("wrong"); // Remove wrong answer highlighting
        option.current.classList.remove("correct"); // Remove correct answer highlighting
        return null;
      });
    }
  };

  // Function to reset the quiz
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        {result ? (
          <></> // If quiz is finished, do nothing
        ) : (
          <>
            {" "}
            {/* If quiz is not finished, display question, options, and Next button */}
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={Option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
              >
                {question.option4}
              </li>
            </ul>
            <button onClick={next}>Next</button>
            <div className="index">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
        {result ? (
          <>
            {/* If quiz is finished, display score and Reset button */}
            <h2>
              You Scored {score} out of {data.length}
            </h2>
            <button onClick={reset}>Reset</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Quiz;
