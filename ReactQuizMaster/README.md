# Quiz App Overview

## Description
This is a simple quiz application built using React. It allows users to answer multiple-choice questions and displays their score at the end.

## Components
- **Quiz**: The main component responsible for rendering the quiz interface and logic.

## State Variables
1. **index**: Tracks the index of the current question.
2. **question**: Stores the current question object.
3. **lock**: Indicates whether options are locked (disabled) after an answer is selected.
4. **score**: Stores the user's score.
5. **result**: Flags if the quiz is finished.

## Functions
1. **checkAns**: Checks the selected answer against the correct answer, updates score, and highlights correct/wrong answers.
2. **next**: Moves to the next question, resets options, and checks if the quiz is finished.
3. **reset**: Resets the quiz to its initial state.

## External Data
- The quiz questions and answers are stored in an external data file imported as `data`.

## Styling
- CSS styles for the quiz component are defined in `Quiz.css`.
