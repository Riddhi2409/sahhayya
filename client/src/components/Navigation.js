import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './StickyComponent.css';
import { Link ,useNavigate} from 'react-router-dom'

export default function Navigation() {
    const [nav, setNav] = useState(false);
    const navigate= useNavigate()

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'contact'
        },
        {
            id: 4,
            link: 'signup'
        },
        {
            id: 5,
            link: 'login'
        },
    ]
    return (
        <div className="sticky flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 ">
            <div>
                <h1 className='text-5xl  ml-2 ' >Sahaya</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <div
                        onClick={()=>navigate(`${link==='home' ? '/': `/${link}`}`)}
                        key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200'>

                        {link}

                    </div>
                ))}

            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
                    {links.map(({ id, link }) => (
                        <div onClick={()=>navigate({link})} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {link}
                        </div>
                    ))}
                </div>
            )}

        </div>


    );
};

