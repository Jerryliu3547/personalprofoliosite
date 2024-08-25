import React from 'react'
import { cn } from "../../lib/utils";
import BackgroundEffect2 from '../../components/background2.js'
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid.js";
import { motion } from "framer-motion";
import Image from 'next/image'
import {Stack, Avatar} from '@mui/material'



const page = () => {
  const Skeleton = () => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Avatar src="/logo/JavaScript.png" sx={{ width: 80, height: 80, borderRadius: '50%' }} />
      </Stack>
    </div>
  );
  
  
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