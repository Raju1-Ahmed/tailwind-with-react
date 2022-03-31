import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pringOptions=[
        {id: 1, name: 'free', price: 38.286, benefits: [
            'life time free unlimited deals',
             'localizeds deals', 
             'fentasting deals',
              'crazy deals']},

        {id: 2, name: 'regular', price: 1298, benefits: [
            'everything on free',
             'localizeds deals',
              'fentasting deals',
               'crazy deals'] },

        {id: 3, name: 'Premium', price: 978.254, benefits: [
            'everything on regular',
             'localizeds deals',
              'fentasting deals',
               'crazy deals']},
    ]
    return (
        <div className='bg-indigo-200 mt-8 p-4 '>
            <h1 className='text-6xl font-mono text-white'>
                welcome to my pricing club
            </h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            </p>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    pringOptions.map(option => <PricingOption
                     key={option.id}
                     option={option}
                    ></PricingOption> )
                }
            </div>
        </div>
    );
};

export default Pricing;