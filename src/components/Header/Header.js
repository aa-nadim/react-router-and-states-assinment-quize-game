import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex items-center justify-between bg-teal-500 p-6'>
      <div className='text-white mr-6'>
        <span className='font-semibold text-xl'>Quize Game</span>
      </div>

      <div className='lg mr-6'>
        <Link
          to='/'
          className='block  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        >
          Topics
        </Link>
        <Link
          to='/statistics'
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        >
          Statistics
        </Link>
        <Link
          to='/blog'
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Header;
