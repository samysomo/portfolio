"use client"
import React from 'react'
import { gridItems } from '@/data'
import dynamic from 'next/dynamic'

const BentoGrid = dynamic(
  () => import('../components/ui/BentoGrid').then(mod => mod.BentoGrid),
  { ssr: false }
)

const BentoGridItem = dynamic(
  () => import('../components/ui/BentoGrid').then(mod => mod.BentoGridItem),
  { ssr: false }
)

export const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}