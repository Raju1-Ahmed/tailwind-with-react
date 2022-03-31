import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'


const Benefit = (props) => {
    console.log(props);
    return (
        <div>
            <p className='flex items-center mr-2'> <CheckCircleIcon className='w-4 h-4 text-green-500'></CheckCircleIcon> {Benefit}
           {props.benefit}
            </p>
        </div>
    );
};

export default Benefit;