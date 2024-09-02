import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0 // start immediately
          }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0.4 // start 0.2 seconds after the first icon
          }}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0.2 // start 0.4 seconds after the first icon
          }}
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0.7 // start 0.6 seconds after the first icon
          }}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0.5 // start 0.8 seconds after the first icon
          }}
        >
          <DiMysql className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10] // move up and down, then back to original position
          }}
          transition={{
            duration: 3,
            repeat: Infinity, // repeat the animation infinitely
            ease: "easeInOut",
            delay: 0.9 // start 1 second after the first icon
          }}
        >
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies