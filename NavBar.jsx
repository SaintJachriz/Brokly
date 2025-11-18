import {useState} from 'react'

import dogImg from '../assets/dog.png'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
const navigate = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Tokenomics' },
    { name: 'FAQ' },
    {name: 'Contact'}
]
export const NavBar = () => {
    const [nav, setNav] = useState(true)

    

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between md:justify-around border-[3px] md:border-black w-[95%] md:w-[80%] md:ml-30 ml-4 mt-5 rounded-xl bg-[#FDF9C6]'>
            <img src={dogImg} alt="" className='w-[70px] p-4' />
            <div className='hidden md:flex justify-between p-4 gap-12'>
                <ul>
                    {navigate.map((nav, key) => (
                        <a key={key} className='p-4 font-semibold text-[13px] font-stack'>
                            {nav.name}
                        </a>
                    ))}
                </ul>
                <button className='bg-[#C6763C] w-[100px] h-[32px] text-white text-[13px] font-semibold'>Buy Now</button>
            </div>
                <div className='md:hidden'>
                    <div onClick={handleNav} className='mt-4 flex md:hidden mr-3 cursor-pointer'>
                        {nav ? <Menu size={25} /> : <X size={25} />}
                                </div>
                                {/* Mobile */}
                                <ul className={`flex flex-col absolute left-0 sm:w-[50%] bg-[#FDF9C6] h-screen top-0 p-5 ${nav ? 'transform translate-x-[-100%] duration-400' : 'translate-x-[0] duration-400'}`}>
                    <a className='text-2xl font-stack p-6 border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 hover:bg-[#ccc] cursor-pointer'>Home</a>
                    <a className='text-2xl font-stack p-6 border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 hover:bg-[#ccc] cursor-pointer'>About Us</a>
                    <a className='text-2xl font-stack p-6 border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 hover:bg-[#ccc] cursor-pointer'>Tokenomics</a>
                    <a className='text-2xl font-stack p-6 border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 hover:bg-[#ccc] cursor-pointer'>FAQ</a>
                    <a className='text-2xl font-stack p-6 border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 hover:bg-[#ccc] cursor-pointer'>Contact</a>
                    <a className='bg-[#C6763C] mt-5 text-white w-full text-center'>Buy Now</a>
                                </ul>
                </div>
        </div>
    )
}
