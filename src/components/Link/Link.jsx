import React from 'react';


const Link = ({route}) => {
    return (
        <li className='mr-12 hover:bg-purple-500'>
            <a href={route.route}>{route.name}</a>
        </li>
    );
};

export default Link;