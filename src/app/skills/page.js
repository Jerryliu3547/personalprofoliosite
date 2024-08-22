import React from 'react'
import { cn } from "../../lib/utils";
import BackgroundEffect2 from '../../components/background2.js'
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid.js";
import { motion } from "framer-motion";
import Image from 'next/image'
import {SkeletonSeven} from './components/ '



const page = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <div className=''>
        <Image src='/logo/JavaScript.png' height='100' width='100'/>
      </div>

    </div>
  );
  const SkeletonFour = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Just code in Vanilla Javascript
          </p>
          <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Delusional
          </p>
        </motion.div>
        <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Tailwind CSS is cool, you know
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Sensible
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            I love angular, RSC, and Redux.
          </p>
          <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Helpless
          </p>
        </motion.div>
      </motion.div>
    );
  };
  const items = [
    {
      title: "JavaScript",
      description: "5 Years Expreience",
      header: <Skeleton />,
  
    },
    {
      title: "React & Next.JS",
      description: "5 Years Experience",
      header: <Skeleton />,
   
    },
    {
      title: "Styling",
      description: "CSS, Tailwind CSS, Material UI, Aceternity UI",
      header: <Skeleton />,

    },
    {
      title: "BackEnd",
      description:
        "Express",
      header: <Skeleton />,

    },
    {
      title: "Database",
      description:
        "MongoDB & SQL",
      header: <Skeleton />,

    },
    {
      title: "Python",
      description: "8 Years Exprerience",
      header: <Skeleton />,
    },
    {
      title: "AI Framework and Library",
      description: "TensorFlow, Scikit Learn, Keras",
      header: <Skeleton />,
 
    },
    {
      title: "C++",
      description: "3 Years of Exprience",
      header: <Skeleton />,
    },
    {
      title: "JAVA",
      description: "1 Years of Exprience",
      header: <Skeleton />,
    },
  ];
  return (
    <div>
        <BackgroundEffect2/>
        <div className="absolute top-24 md:top-36 text-red-100 flex-col justify-center items-center w-full">
            <p className="text-center text-5xl sm:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                        Technical Stack
            </p>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={cn("[&>p:text-lg]", item.className)}
                />
              ))}
            </BentoGrid>
        </div>
    </div>
  )
}

export default page