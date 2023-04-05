import React, { useState } from 'react';
import { useLoaderData,useNavigation  } from 'react-router-dom';
import Card from '../../components/Card/Card';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Home = () => {
    
    const [meals,setMeals]= useState(useLoaderData().meals)
    const [isFound,setIsFound]= useState(true)
    const navigation = useNavigation();
    console.log(navigation.state)
    const keydownHandler= (e)=>{
        if (e.key === 'Enter') {
           fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
           .then(res=>res.json())
           .then(data=>{
            
            if(data.meals===null) {
                setMeals([]);
                setIsFound(false);
                
            }
            else {
                setMeals(data.meals);
                setIsFound(true);
            }
            
           })
        }
    }

    
    if(navigation.state === "loading") return <LoadingSpinner></LoadingSpinner>
    return (
        <div>

           

           
            
            <input onKeyDown={keydownHandler} className='searchico my-10 flex mx-auto w-[95%] max-w-[600px] p-3 rounded-lg bg-[#ffffff] shadow-2xl border-2' type="text"placeholder='Search for Meals' />
              
            {
                !isFound && <div className="text-center px-2 flex justify-center text-[red] text-7xl py-10">Opps No result Found</div>
            }

            <div className=" flex justify-center">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-2'>
            {
                meals.map((data,i)=><Card key={i} data={data}></Card>)
            }
        </div>
            </div>
        </div>
    );
};

export default Home;