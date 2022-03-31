import React from 'react';

const Link = ({route}) => {
    console.log(route);
    const {name, link} = route;
    return (
        <div>
               <li className='list-none mr-16'>
                   <a href={link}>{name}</a>
                </li>
            
        </div>
    );
};

export default Link;