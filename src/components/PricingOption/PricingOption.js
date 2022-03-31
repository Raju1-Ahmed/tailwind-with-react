import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    console.log(props);
    const {name, price, benefits} = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
        <h2 className='bg-indigo-300 py2 rounded text-xl font-bold '>{name}</h2>
        <p>
            <span className='text-1xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
        </p>
        <div>
            <h3 className='text-xl  text-left'>Benefite:</h3>
        {
            benefits.map(benefit=> <Benefit
            benefit={benefit}
            ></Benefit>)
        }
        </div>
        <button className='bg-green-500 flex justify-center
        rounded mt-6 py-2 w-full hover:text-green-700 font-bold '>
            Buy naw <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
        </button>
        </div>

    );
};

export default PricingOption;