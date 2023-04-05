import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);


    const routes = [
        { id: 1, name: "Home", route: "/" },
        { id: 2, name: "About", route: "/about" },
        { id: 3, name: "Contact", route: "/contact" },
        { id: 4, name: "Products", route: "/products" },
        { id: 5, name: "Services", route: "/services" }
      ];

    return (
        <nav className='bg-purple-400 px-4'>
     
            <div onClick={() =>setOpen(!open)} className='md:hidden'>
                <span>{open === true ?
                 <XMarkIcon className="h-6 w-6 text-blue-500" /> 
                    : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
                
                

            </div>
           

            <ul className={`md:flex absolute md:static duration-500 bg-purple-300 pl-8 p-4 ${open ?  'top-6' : '-top-96'}`}>
                {
                    routes.map(route =><Link
                    key ={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;