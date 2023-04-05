import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() =>{
        fetch('pricess.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])


    return (
        <div className='mx-12'> 
            <h1 className='text-5xl bg-purple-400 font-bold text-center text-purple-950 p-4 m-5' >Awesome Affordable Price</h1>
     <div className='grid md:grid-cols-3 gap-4'>
        {
            prices.map(price =><PriceCard
            key ={price.id}
            price={price}
            ></PriceCard>)
        }
     </div>
        </div>
    );
};

export default PriceList;