import { FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{ opacity:0, y: -100}}
    transition={{ duration: 0.5}}
    className="my-10 text-center text-4xl">Technologies</motion.h2>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{ opacity:0, x: -100}}
    transition={{ duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-5xl text-cyan-700" />
        </motion.div>


        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>


        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJs className="text-5xl text-yellow-400" />
        </motion.div>


        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDatabase className="text-5xl text-cyan-800" />
        </motion.div>


        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-5xl text-green-500" />
        </motion.div>


        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-5xl text-green-600" />
        </motion.div>

    </motion.div>
  </div>
}

export default Technologies