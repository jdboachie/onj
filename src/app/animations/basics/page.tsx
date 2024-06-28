'use client'

import { motion } from 'framer-motion'

function Basics() {

  const gridContainerVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const animationBoxStyles = 'aspect-square bg-neutral-100 drop-shadow shadow-inner shadow-white/10  dark:bg-neutral-800 rounded-lg place-items-center grid grid-flow-col'

  return (
    <div className="items-center grid gap-10 lg:overflow-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial='hidden'
        animate='show'
        className='lg:max-w-5xl w-full h-screen mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-rows-2 p-10 gap-10'
      >
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="size-20 bg-sky-400 rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            className="size-20 bg-sky-400 rounded-full"
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.div
            animate={{
              scale: [1,  2, 1],
              rotate: [0, 180, 0],
              borderRadius: ["10%", "100%", "10%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
            className='bg-blue-400 size-1/3 drop-shadow-md'
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.01 }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 600
            }}
            className='drop-shadow-md bg-sky-600 border border-sky-500 shadow-inner shadow-white/25 h-8 px-3 rounded-lg text-sm text-white'
          >
            send me a login link
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.div
            drag
            dragConstraints={{
              top: -2,
              right: 2,
              bottom: 2,
              left: -2,
            }}
            dragTransition={{
              bounceStiffness: 5000,
              bounceDamping: 15,
            }}
            className="size-1/3 bg-orange-600 shadow-inner shadow-orange-900 rounded-full cursor-grab"
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          {/* <div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
            <motion.div className='w-full bg-gray-400 h-full' />
          </div> */}
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg grid gap-10">

        </motion.div>
      </motion.section>
    </div>
  )
}

export default Basics