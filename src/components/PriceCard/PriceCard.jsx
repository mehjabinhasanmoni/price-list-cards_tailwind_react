import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.prices}</span>
                <span className='text-2xl font-bold text-white '>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
           <p className='underline text-white font-bold'>Features : </p>
           {
            price.features.map((feature,index) => <Feature 
            key={index}
            feature={feature}
           
            ></Feature>)
           }
           <button className='mt-auto w-full bg-purple-300 hover:bg-purple-500  py-2 rounded-md font-bold text-white'>Buy Now</button>
            
        </div>
    );
};

export default PriceCard;