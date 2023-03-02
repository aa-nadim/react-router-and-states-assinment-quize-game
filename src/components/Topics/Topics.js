import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData();
  //console.log(topics.data.length);
  return (
    <div>
      <h3 className='text-3xl font-bold underline'>
        Topics: {topics.data.length}
      </h3>
      <div className='flex items-center justify-around'>
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
