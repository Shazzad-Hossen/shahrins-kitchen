import React from 'react';
import { Link, useLoaderData,useNavigation } from 'react-router-dom';
import Ingridiants from '../../components/Ingridiants/Ingridiants';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Details = () => {

    const data= useLoaderData();
    const navigation = useNavigation();
    console.log(navigation.state)
    const {strCategory ,strMealThumb, strMeal, strInstructions, strYoutube,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10, strIngredient11, strIngredient12, strIngredient13,strIngredient14, strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10, strMeasure11,strMeasure12,strMeasure13,strMeasure14}=data.meals[0];

    if(navigation.state === "loading")  return <LoadingSpinner></LoadingSpinner>
    
    return (
        <div className='p-10'>
                <div className="flex gap-6 flex-col md:flex-row">
                <img className='max-w-[400px]' src={strMealThumb} alt="" />
               <div className="">
                    <h1 className='font-bold text-2xl'>{strMeal}</h1>
                    <p className='py-2'> <span className='font-semibold text-xl'>Category:</span> {strCategory} </p>
                    <p className='py-2'> <span className='font-semibold text-xl'>Ingridiants:</span> </p>
                    
                     <Ingridiants m={strIngredient1} i={strMeasure1} ></Ingridiants>
                     <Ingridiants m={strIngredient2} i={strMeasure2} ></Ingridiants>
                     <Ingridiants m={strIngredient3} i={strMeasure3} ></Ingridiants>
                     <Ingridiants m={strIngredient4} i={strMeasure4} ></Ingridiants>
                     <Ingridiants m={strIngredient5} i={strMeasure5} ></Ingridiants>
                     <Ingridiants m={strIngredient6} i={strMeasure6} ></Ingridiants>
                     <Ingridiants m={strIngredient7} i={strMeasure7} ></Ingridiants>
                     <Ingridiants m={strIngredient8} i={strMeasure8} ></Ingridiants>
                     <Ingridiants m={strIngredient9} i={strMeasure9} ></Ingridiants>
                     <Ingridiants m={strIngredient10} i={strMeasure10} ></Ingridiants>
                     <Ingridiants m={strIngredient11} i={strMeasure11} ></Ingridiants>
                     <Ingridiants m={strIngredient12} i={strMeasure12} ></Ingridiants>
                     <Ingridiants m={strIngredient13} i={strMeasure13} ></Ingridiants>
                     <Ingridiants m={strIngredient14} i={strMeasure14} ></Ingridiants>
                    
                    
                </div>

            </div>
            <p className='py-4 text-justify'> <span className='font-semibold text-xl'>Instructions:</span> {strInstructions} </p>
            <p className='py-4 text-justify'> <span className='font-semibold text-xl'>Youtube:</span> 
            <Link to={strYoutube}> {strYoutube}</Link> </p>
           
        </div>
    );
};

export default Details;