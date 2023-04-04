import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const {idMeal,strMealThumb, strMeal,strTags }=data;
    return (
        <Link to={`details/${idMeal}`}><div className='h-[500px] max-w-sm border-2 rounded-lg shadow-lg'>
        <img className='w-[100%] rounded-t-lg' src={strMealThumb} alt="" />
        <h1 className='p-4 font-bold text-lg'>{data.strMeal}</h1>
        
    </div></Link>
    );
};

export default Card;