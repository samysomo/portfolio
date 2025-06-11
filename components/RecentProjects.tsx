import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

type Props = {}

export const RecentProjects = (props: Props) => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {" "}
            <span className='text-[#45a4e3]'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-34 gap-y-8 mt-10 '>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] sm:h-[41rem] h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw] '>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center sm:w-[480px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <Image src="/bg.png" alt="bg-img" fill/>
                            </div>
                            <Image src={img} alt={title} className='z-10 absolute bottom-0' height={500} width={500}/>
                        </div>
                        <h1 className='font-bold lg:text-3xl md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <Image src={icon} alt={icon} className='p-2' fill/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-[#45a4e3]'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color='#45a4e3'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}