'use client'

import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

function Basics() {

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  })

  const { scrollYProgress: completionProgress } = useScroll()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100", "0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100", "0%"]
  )

  const gridContainerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.125,
      }
    }
  }

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
    }
  }

  const animationBoxStyles = 'aspect-square bg-neutral-100 drop-shadow shadow-inner shadow-white/10  dark:bg-neutral-800 rounded-lg place-items-center grid grid-flow-col'

  return (
    <div className="h-fit items-center grid gap-10 sm:overflow-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial='hidden'
        animate='show'
        className='sm:max-w-5xl w-full h-fit mx-auto grid grid-cols-1 sm:grid-cols-2 grid-flow-row sm:grid-rows-2 sm:p-10 p-0 gap-10'
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
              bounceStiffness: 1500,
              bounceDamping: 25,
            }}
            className="size-1/3 bg-orange-600 shadow-inner shadow-orange-400 rounded-full cursor-grab"
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
            <motion.div
              style={{ scaleY: completionProgress }}
              className='w-full bg-gray-400 h-full rounded-xl origin-bottom'
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className={animationBoxStyles}
        >
          <motion.svg
            xmlns={'http:/www.w3.org/2000/svg'}
            viewBox={'0 0 24 24'}
            className={`w-1/2 stroke-amber-500 stroke-[0.5]`}
            >
            <motion.path
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                },
                fill: {
                  duration: 1,
                  ease: 'easeIn',
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }
              }}
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section
        ref={containerRef}
        className='grid grid-flow-row p-5 gap-20 mb-10'
      >
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl font-bold text-neutral-700 dark:text-neutral-200 text-center"
          >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphOneValue }}
          className='text-neutral-700 dark:text-neutral-200  text-lg sm:w-3/4 mx-auto'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
          In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
        </motion.p>

        <motion.p
          style={{ translateX: paragraphTwoValue }}
          className='text-neutral-700 dark:text-neutral-200 text-lg sm:w-3/4 mx-auto'
        >
          Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, adipiscing id est.
          Duis vulputate diam in odio vestibulum vulpu tate. Maecenas aliquam, felis vitae lacinia dictum, mi ligula cursus velit, nec rutrum augue urna in dolor.
        </motion.p>
      </section>
    </div>
  )
}

export default Basics