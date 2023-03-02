import React, { useState } from 'react';

const Question = ({ ques, count, handleAddToCart }) => {
  const { id, question, options, correctAnswer } = ques;

  let cnt = 0;
  const handleAnswer = (option) => {
    if (correctAnswer === option) {
      alert('YES!!! This is Correct Answer');
      handleAddToCart('YES');
    } else {
      alert('NO! this is incorrect');
      handleAddToCart('NO');
    }
  };
  return (
    <div className='border-2 rounded-lg max-w-xl m-3 p-5'>
      <h3 className='text-2xl'>
        Quiz {count}: {question}
      </h3>
      <div className='p-3 grid grid-cols-2 gap-4'>
        {options.map((option) => (
          <li
            onClick={() => {
              handleAnswer(option);
            }}
            className='border-2 rounded-lg p-5 hover:bg-teal-500 cursor-pointer'
          >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Question;
