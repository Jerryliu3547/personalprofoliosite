import React from 'react'
import BackGroundEffect from '../../components/backgroud.js'
import { EvervaultCard, Icon } from "../../components/ui/evervault-card-osu.js";
import { EvervaultCardGA} from "../../components/ui/evervault-card-gatech.js";
import OSULOGO from "./Ohio_state_logo.png"
import GATECH from "./Georgia_Tech_logo.png"
import Image from 'next/image.js';

const osuSkills = [
  "Data Visualization",
  "Quality Control",
  "Lean Management",
  "Matlab",
  "Data Analysis",
  "Materials Science"
];

const gaSkills = [

  "Artificial Intelligence",
  "Computer Vision",
  "Computer System",
  "SW Development",
  "SDLC",
  "SW Architecture"
];


const page = () => {
  return (
<div className="relative">
  <BackGroundEffect />

  <div className="absolute top-24 md:top-48 text-red-100 flex-col justify-center items-center w-full">
    <p className="text-center text-5xl sm:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Education Background
    </p>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-x-4 gap-10 ">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm md:max-w-md lg:max-w-lg p-4 relative h-[40rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text={<Image src={OSULOGO} alt='OSU Logo' />} />

        <div className=''>
          <h2 className="dark:text-white text-black mt-4 text-xl font-bold">
          The Ohio State University
          </h2>
          <h3 className="dark:text-white text-black mt-4 text-md font-light">
          Bachelor of Science in Material Science and Engineering
          </h3>
          <div className='mt-4 grid grid-cols-3 gap-2'>
            {osuSkills.map((skill, index) => {
              return (
      
                  <span key={index} className="text-center text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">{skill}</span>
              );
            })}

          </div>
         </div>
      </div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm md:max-w-md lg:max-w-lg p-4 relative h-[40rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCardGA text={<Image src={GATECH} alt='GATECH Logo' />}  />

        <div className=''>
          <h2 className="dark:text-white text-black mt-4 text-xl font-bold">
          Georgia Institute of Technology
          </h2>
          <h3 className="dark:text-white text-black mt-4 text-md font-light">
          Master of Science in Computer Science
          </h3>
          <div className='mt-4 grid grid-cols-3 gap-2'>
            {gaSkills.map((skill, index) => {
              return (
      
                  <span key={index} className="text-center text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">{skill}</span>
              );
            })}

          </div>
         </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page