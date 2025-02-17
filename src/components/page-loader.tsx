import React from 'react';
import UseAnimations from 'react-useanimations';
import loading from "react-useanimations/lib/loading"

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <UseAnimations size={56}  animation={loading} />
    </div>
  );
};

export default PageLoader;