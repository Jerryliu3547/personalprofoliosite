import React from 'react'
import BackgroundEffect2 from '../../components/background2.js'

const page = () => {
  return (
    <div>
        <BackgroundEffect2/>
        <div className="absolute top-24 md:top-48 text-red-100 flex-col justify-center items-center w-full">
            <p className="text-center text-5xl sm:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                        Technical Skills
            </p>
        </div>
    </div>
  )
}

export default page