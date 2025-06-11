"use client"
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'

type Props = {
  title: string,
  icon?: React.ReactNode,
  position?: string,
  handleClick?: () => void,
  anotherClasses?: string
}

export const MagicButton = (props: Props) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60" onClick={props.handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#48a0d9_0%,#2b4e69_50%,#48a0d9_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#242424] rounded-lg px-7 py-3 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${props.anotherClasses}`}>
            {props.position === "left" && props.icon}
            {props.title}
            {props.position === "right" && props.icon}
        </span>
    </button>
  )
}