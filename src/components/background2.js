'use client'
import React from 'react';
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background"; // Fixed the typo in the import path

const BackgroundEffect2 = () => {
  return (
    <div className=" w-full overflow-hidden relative">
        <AuroraBackground>
        {/* <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
        >

        </motion.div> */}
        </AuroraBackground>


    </div>
  );
}

export default BackgroundEffect2;
