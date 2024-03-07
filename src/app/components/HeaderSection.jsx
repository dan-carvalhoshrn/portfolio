"use client"

import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'


const HeaderSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-9 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-600'>
                            Hello, I&apos;m{" "}
                        </span>

                        <br />

                        <TypeAnimation
                            sequence={[
                                'Daniel',
                                1000,
                                'Software Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'Fullstack Dev',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lf:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-red-500 to-secondary-600 hover:bg-slate-200 text-black'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-primary-600 via-red-500 to-secondary-600 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-3 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/chibi_daniel_1.png"
                            alt="avatar"
                            width={300}
                            height={300}
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection