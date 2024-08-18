import React from 'react';
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/Sportlight"; // Fixed the typo in the import path

const BackgroundEffect = () => {
  return (
    <div className=" w-full overflow-hidden relative">
      <div className='relative'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.03] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}

export default BackgroundEffect;
