'use client';

import { motion } from 'framer-motion'

function One() {

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },

  }
  return (
    <>
    {/* <div className='fixed top-0 left-0 w-screen overflow-hidden h-[10%] dark:h-[9%] bg-gradient-to-b from-white/90 via-white/70 to-transparent dark:from-neutral-900/90 dark:via-neutral-900/70 dark:to-transparent backdrop-blur-sm backdrop-opacity-50' /> */}
    <div
      className='
      h-fit
      after:z-50
      after:-top-1
      after:fixed
      after:inset-0
      after:h-16
      after:bg-gradient-to-b
      after:blur-sm
      after:backdrop-opacity-40
     after:from-neutral-900/95 after:via-neutral-900/80 after:to-transparent
      '
    >
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          }
        }
      }}
      initial='hidden'
      animate='show'
      className='typography text-neutral-200 font-sans tracking-tight text-base md:p-12 my-16 grid h-fit'
    >
      <motion.p variants={paragraphVariants}>
        I am consistently unhappy with my creative output. My job title includes designer, but Im not good at designing something from scratch.
      </motion.p>

      <motion.p variants={paragraphVariants}>
        None of work I create matches up to the work of designers that I admire. At a minimum, I want to feel more comfortable designing work that meets my own minimum expectations of quality. Impostor Syndrome probably plays a big part (especially working with such talented colleagues!) but maybe I simply need practice.
      </motion.p>

      <motion.p variants={paragraphVariants}>
        Creativity is definitely my strong suit. Im logical. Building on past experience to improve future work is something I am good at. Creating something new is not. Thats why it feels like everything I create is a remix of my past work, or the work of others.
      </motion.p>

      <motion.p variants={paragraphVariants}>
      Does this still count as my creative output, though? Id argue that anything new in design is just old stuff reworked in new ways. Buried in sarcasm, Mark Dalgleish explains that step in the design process:
      </motion.p>

      <motion.p variants={paragraphVariants}>
      If youre a developer who finds design difficult, youre probably skipping the ‘inspiration’ phase—which, in non-designer speak, roughly translates to ‘look at other designs and rip off all the good ideas’.
      </motion.p>

      <motion.p variants={paragraphVariants}>
      This is a totally valid way to work. Its probably the most efficient. Youre not the first person working on your problems, so use what other people have already discovered. But to what degree can we claim this work as our own?
      </motion.p>
      <motion.p variants={paragraphVariants}>
        None of work I create matches up to the work of designers that I admire. At a minimum, I want to feel more comfortable designing work that meets my own minimum expectations of quality. Impostor Syndrome probably plays a big part (especially working with such talented colleagues!) but maybe I simply need practice.
      </motion.p>

      <motion.p variants={paragraphVariants}>
        Creativity is not my strong suit. Im logical. Building on past experience to improve future work is something I am good at. Creating something new is not. Thats why it feels like everything I create is a remix of my past work, or the work of others.
      </motion.p>

      <motion.p variants={paragraphVariants}>
      Does this still count as my creative output, though? Id argue that anything new in design is just old stuff reworked in new ways. Buried in sarcasm, Mark Dalgleish explains that step in the design process:
      </motion.p>

      <motion.p variants={paragraphVariants}>
      If youre a developer who finds design difficult, youre probably skipping the ‘inspiration’ phase—which, in non-designer speak, roughly translates to ‘look at other designs and rip off all the good ideas’.
      </motion.p>

      <motion.p variants={paragraphVariants}>
      This is a totally valid way to work. Its probably the most efficient. Youre not the first person working on your problems, so use what other people have already discovered. But to what degree can we claim this work as our own?
      </motion.p>
    </motion.section>
    </div>
    </>
  )
}

export default One