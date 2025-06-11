import { FaLocationArrow } from "react-icons/fa"
import { MagicButton } from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/GlowingStars"
import { div } from "three/examples/jsm/nodes/Nodes.js"

type Props = {}

 export const Hero = (props: Props) => {
  return (

    <div className="relative h-screen overflow-y-hidden" >
      <GlowingStarsBackgroundCard className="absolute inset-0">
          <div className='pb-20 pt-36 relative z-10'>
            {/* <div className="overflow-hidden w-full">
              <Spotlight
                fill="white" 
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              />
              <Spotlight
                fill="white" 
                className="-top-10 left-full h-[80vh] w-[50vw]"
              />
              <Spotlight
                fill="white" 
                className="top-28 left-80 h-[80vh] w-[50vw]"
              />
            </div> */}
            <div className="h-screen w-ful flex items-center justify-center absolute top-0 left-0">
              
              
            </div>
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-blue-400 max-w-80">
                Fullstack Developer & Tech Enthusiast
              </h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Building digital solutions that empower businesses and delight users"
              />
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                I&apos;m Sam, a passionate web developer from Mexico, focused on creating robust, scalable, and beautiful web applications.
              </p>
              <a href="#about" className="md:mt-10">
                <MagicButton
                  title="Show my Work"
                  icon={<FaLocationArrow/>}
                  position="right"
                />
              </a>
              
            </div>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>

    
  )
}