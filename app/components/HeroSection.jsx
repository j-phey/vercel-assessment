'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hi there, I&apos;m {" "}</span>
                    <br></br>
                    <TypeAnimation
                    
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Jon Phey 👋🏻',
                        1500 // wait 1s before replacing "Mice" with "Hamsters"
                        // 'Web Developer',
                        // 1000
                        // 'We produce food for Guinea Pigs',
                        // 1000,
                        // 'We produce food for Chinchillas',
                        // 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-gray-300 text-base sm:text-lg lg:text-xl mb-6'>
                    This Next.js project has been deployed on Vercel and contains the exercises for the Senior Customer Success Engineer take home assessment. 
                </p>

                {/* Hire me / Download CV buttons */}
                {/* <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div> */}
            </div>

            {/* Avatar / Profile Photo */}
            {/* <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-slate-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src="/images/avatar.png" className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' 
                    alt="hero image" width={300} height={300}/>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default HeroSection