import React from 'react';
import UseAnimations from 'react-useanimations';
import loading from "react-useanimations/lib/loading"

const PageLoader = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <UseAnimations size={56}  animation={loading} />
    </div>
  );
};

export default PageLoader;