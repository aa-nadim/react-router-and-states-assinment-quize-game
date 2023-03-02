import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  //console.error(error);
  return (
    <div style={{ alignItems: 'center' }} className='text-center'>
      <h1 className=''>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
