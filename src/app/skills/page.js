import React from 'react'
import { cn } from "../../lib/utils";
import BackgroundEffect2 from '../../components/background2.js'
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid.js";
import {Stack, Avatar} from '@mui/material'
import {sourcelist1, sourcelist2, sourcelist3, sourcelist4, sourcelist5, sourcelist6, sourcelist7, sourcelist8, sourcelist9
} from './components/sourcelist'



const page = () => {
  const Skeleton = ({ sources=[] }) => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Stack direction="row" justifyContent="center" alignItems="center" gap={2} flexWrap='wrap' >
        {sources.map((source, index) => (
          <Avatar variant='rounded' key={index} src={source} sx={{ width: 80, height: 80, borderRadius: '50%' }} />
        ))}
      </Stack>
    </div>
  );


  
  
  const items = [
    {
      title: "JavaScript",
      description: "5 Years Expreience",
      header: <Skeleton sources={sourcelist1}/>,
  
    },
    {
      title: "React & Next.JS",
      description: "5 Years Experience",
      header: <Skeleton sources={sourcelist2}/>,
   
    },
    {
      title: "Styling",
      description: "CSS, Tailwind CSS, Material UI, Aceternity UI",
      header: <Skeleton sources={sourcelist3} />,

    },
    {
      title: "BackEnd",
      description:
        "Express & Node.JS",
      header: <Skeleton sources={sourcelist4} />,

    },
    {
      title: "Database",
      description:
        "MongoDB,SQL, MySQL, Mongoose",
      header: <Skeleton sources={sourcelist5} />,

    },
    {
      title: "Python",
      description: "8 Years Exprerience",
      header: <Skeleton sources={sourcelist6} />,
    },
    {
      title: "AI Framework and Library",
      description: "TensorFlow, Scikit Learn, Keras",
      header: <Skeleton sources={sourcelist7} />,
 
    },
    {
      title: "C++",
      description: "3 Years of Exprience",
      header: <Skeleton sources={sourcelist8} />,
    },
    {
      title: "JAVA",
      description: "1 Years of Exprience",
      header: <Skeleton sources={sourcelist9} />,
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