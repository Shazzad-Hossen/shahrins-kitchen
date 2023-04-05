import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='bg-red  min-h-[calc(100vh-184px)] flex justify-center items-center'>
           
           <div className="flex justify-center items-end"><p className='text-7xl font-thin text-[#ff660e]'>L</p>
           <div className="border-8 p-3 border-[#ff0e2e] border-dashed rounded-full animate-spin relative bottom-1"></div>
           <p className='text-7xl font-thin text-[#ff660e]'>ading...</p></div>
           

           
            
        </div>
    );
};

export default LoadingSpinner;