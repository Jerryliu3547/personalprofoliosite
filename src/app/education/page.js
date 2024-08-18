import React from 'react'
import BackGroundEffect from '../../components/backgroud.js'
import { EvervaultCard, Icon } from "../../components/ui/evervault-card-osu.js";
import { EvervaultCardGA} from "../../components/ui/evervault-card-gatech.js";
import OSULOGO from "./Ohio_state_logo.png"
import GATECH from "./Georgia_Tech_logo.png"
import Image from 'next/image.js';

const page = () => {
  return (
<div className="relative">
  <BackGroundEffect />
  <div className="absolute top-48 text-red-100 flex justify-center items-center w-full">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center space-x-4 gap-10 ">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text={<Image src={OSULOGO} alt='OSU Logo' />} />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Hover over this card to reveal an awesome effect. Running out of copy
          here.
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          Watch me hover
        </p>
      </div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCardGA text={<Image src={GATECH} alt='GATECH Logo' />}  />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Hover over this card to reveal an awesome effect. Running out of copy
          here.
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          Watch me hover
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default page