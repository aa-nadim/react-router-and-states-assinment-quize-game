import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  //console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
      <img className='w-full' src={logo} alt='Sunset in the mountains' />
      <div className='px-6 py-4 flex items-center justify-between'>
        <h3 className='font-bold text-xl mb-2'>{name}</h3>

        <Link to={`/quiz/${id}`}>Start Practice -></Link>
      </div>
    </div>
  );
};

export default Topic;
