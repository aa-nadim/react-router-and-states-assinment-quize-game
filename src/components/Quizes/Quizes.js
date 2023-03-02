import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizes = () => {
  const quizes = useLoaderData();
  const { id, logo, name, questions } = quizes.data;
  let count = 1;
  const [totalCorrectAns, setTotalCorrectAns] = useState(0);
  const handleAddToCart = (selectedQuiz) => {
    console.log(selectedQuiz);
    if (selectedQuiz === 'YES') {
      setTotalCorrectAns(totalCorrectAns++);
    }
  };
  return (
    <div>
      <h2 className='text-4xl text-center text-teal-400'>Quiz of {name}</h2>
      <div className='grid justify-items-center'>
        {questions.map((ques) => (
          <Question
            key={ques.id}
            count={count++}
            ques={ques}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <h3>Total Correct Answers : {totalCorrectAns}</h3>
      </div>
    </div>
  );
};

export default Quizes;
