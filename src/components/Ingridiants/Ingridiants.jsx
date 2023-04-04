import React from 'react';

const Ingridiants = ({i,m}) => {
    if(i==='' || m==='') return;
    else return (
        <div className='flex gap-2 items-center text-[#333333]'>
            <p>{i}:</p>
            <p>{m}</p>
            
        </div>
    );
};

export default Ingridiants;