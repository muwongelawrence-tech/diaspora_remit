import React from 'react';

function LoadingScreen() {
  return (
    <div className='flex items-center justify-center h-screen'>
         <img src="/images/diasporaloader.gif" className='w-32 h-32' alt="Loader" />
    </div>
  );
}

export default LoadingScreen;

