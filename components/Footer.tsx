import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div> */}
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Let&apos;s build something <span className='text-[#45a4e3]'>amazing</span> together.
            </h1>
            <h1 className='heading lg:max-w-[45vw] mt-5'> 
                Reach out and let&apos;s turn your ideas into <span className='text-[#45a4e3]'>reality!</span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals.</p>
            <a href="mailto:samserrato12@outlook.com" className='md:mt-8'>
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Samuel Serrato Loyola</p>
            <div className='flex items-center gap-6 md:gap-3'>
                {socialMedia.map((profile) => (
                    <a href={profile.link} key={profile.id} target='_blank' rel='noopener noreferrer'>
                        <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200'>
                            <Image src={profile.img} alt="img" width={20} height={20}/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer