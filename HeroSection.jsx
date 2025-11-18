import { useState } from 'react'
import dogImg from '../assets/dog.png'
import {CopyIcon} from 'lucide-react'
import { CopyCheckIcon } from 'lucide-react'
export const HeroSection = () => {
    const [copied, setCopied] = useState(false)

    const Ca = '0xe3c127466908c2ccdc43521c8315b87fd369d605'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(Ca);
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (err) {
            console.log('Failed to copy', err)
        }
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[7%] mt-10 md:ml-[10%] sm:text-center'>
            <div className='flex justify-center md:hidden animate-fade-in-delay-1'>
                <img src={dogImg} alt="" className='w-[350px] mt-[-9px]' />
            </div>
            <div className='md:text-left text-center animate-fade-in-delay-2'>
                <h2 className='text-[#C6763C] font-stack text-[3em] md:w-[500px] w-[400px]'>$Borkly the Chihuahua Solana degen dog</h2>
                <p className='font-stack text-[#4b200a]'>Woof! Borkly isn't just another meme coin - he's your loyal crypto companion, here to spread joy, wag tails, and fetch good vibes on the blockchain. Whether you're a seasoned investor or just here for the memes, laughter, and maybe a few belly rub</p>
                <div className='grid md:flex justify-center sm:rounded-xl md:justify-around mt-5 md:bg-[#ffbf4783] w-full md:w-[110%] h-[50px]'>
                    <CopyIcon size={15} className='hidden text-[#c6763c] w-8 text-center h-[30px] relative left-[-2%] mt-3 md:flex' />
                <p className='text-center p-3 font-semibold bg-[#ffbf4783]'>{Ca}</p>
                <button onClick={handleCopy} className='bg-[#C6763C] text-white font-stack w-[83px] border-2 border-black h-9 mt-2 cursor-pointer hover:bg-[#6c763c] ease-in-out duration-300'>
                    {copied ? 'Copied' : 'Copy'}
                </button>
                </div>
            </div>
            <div className='md:block hidden'>
                <img src={dogImg} alt="" className='w-[350px] mt-[-9px]' />
            </div>
        </div>
    )
}