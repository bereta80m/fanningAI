
import React, { useEffect } from 'react'
import { Manjari, Outfit } from 'next/font/google'
import { BeakerIcon, ArrowLongLeftIcon, ArrowLongRightIcon, ArrowSmallDownIcon } from '@heroicons/react/24/outline'
import SendMessages from './SendMessages'
import ChatContent from './ChatContent'
const Outfi = Outfit({ subsets: ['latin'], weight: '600' })
const Manjaris = Manjari({ subsets: ['latin'], weight: '400' })

function ThirdPage() {

    return (
        <div className={`  w-full relative scroll-item  `} >
            <div className='w-full   absolute overflow-hidden'>
                <div className='grid w-full Container relative md:grid-cols-2 grid-cols-1 pt-2 pr-2 pb-2'>
                    <div className='flex pt-10 flex-col gap-10 px-16  min-h-screen'>
                        <p className={`${Outfi.className} text-7xl  text-black leading-tight  Building`} >
                            Building the future of AI together
                        </p>
                        <p className={`${Manjaris.className} animate-slide-down text-xl text-black w-[25rem]`}>
                            Ai is transforming the world, and we are leading the charge. We are constructing the future of AI as a collective.
                        </p>
                        <button className='bg-green-500 px-4 p-2 w-32 text-black rounded-full '>Get started</button>
                    </div>


                    <div className=' rounded-3xl  relative h-screen  w-full greenCardRound  bg-gradient-to-br from-[#00bf8f] from-10% to-[#001510] to-100%'>
                    <div className='w-full h-full flex flex-col  overflow-hidden '>
                                <div className=' flex justify-center items-center absolute   w-[10rem] h-16 bg-white rounded-bl-2xl top-0 right-0  '>
                                    <button className='bg-green-500 px-4 p-2 w-32 text-black rounded-full'  >Save </button>
                                </div>
                                <SendMessages />
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default ThirdPage



/*
<div className='greenCardRound absolute inset-0 rounded-3xl btn-grad' style={{ backgroundImage: ' linear-gradient( 135deg, #00bf8f 10%, #001510 100%)' }}>
                            <div className='w-full h-full flex flex-col  overflow-hidden '>
                                <div className=' flex justify-center items-center absolute   w-[10rem] h-16 bg-white rounded-bl-2xl top-0 right-0  '>
                                    <button className='bg-green-500 px-4 p-2 w-32 text-black rounded-full' style={{ backgroundImage: ' ' }} >Get started</button>
                                </div>
                                <ChatContent />
                                <SendMessages />
                            </div>
                        </div>
*/


/*
<div className='bg-purple-500 rounded-3xl relative '>
                        <div className='absolute inset-0 bg-black rounded-3xl   '>
                            <div className='flex justify-center items-center absolute rounded-tr-3xl  w-[10rem] h-16 bg-red-500 rounded-bl-2xl top-0 right-0  '>
                                <button className='bg-green-500 px-4 p-2 w-32 text-black rounded-full'>Get started</button>
                            </div>
                        </div>
                    </div>
*/


/*

"use client"
import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';


function ThirdPage() {
    
    return (
        <div className={`h-[42.5rem] w-full relative scroll-item `} >
            <AnimatePresence>
            <div className='w-full h-full z-20 absolute overflow-hidden grid grid-cols-4'>
                {images.map((img,i)=>(
                     <motion.div key={img} className={`bg-${img} bg-no-repeat  bg-cover h-full w-[20rem] rounded-2xl`} 
                 
                     />
                ))}
            </div>
            </AnimatePresence>
        </div>
    )
}

export default ThirdPage




const images:string[] = ['cart-row', 'polymer-basket', 'colored_toned', '_toned'];


*/