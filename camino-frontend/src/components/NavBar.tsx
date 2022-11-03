import React from 'react';
import { NavLink} from "react-router-dom";

const NavBar = (): JSX.Element => {

    return (
        <>
            <nav className="bg-blue w-full h-20">
                <ul className='flex flex-row justify-around items-center text-yellow font-accent text-xl tracking-wider h-full'>
                    <li className='hover:underline'>
                        <NavLink className={( { isActive} ) => isActive ? 'underline' : ''} to='/about'>About</NavLink>
                    </li>
                    <li className='hover:underline'>
                        <NavLink end className={( { isActive} ) => isActive ? 'underline' : ''} to='/'>Home</NavLink>
                    </li>
                    <li className='hover:underline'>
                        <NavLink to='/map' className={( { isActive} ) => isActive ? 'underline' : ''}>Map</NavLink>
                    </li>
                    <li className='hover:underline'>
                        <NavLink to='/api' className={( { isActive} ) => isActive ? 'underline' : ''}>API</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar;