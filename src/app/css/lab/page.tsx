'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion'

function One() {

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },

  }

  const paragraphClasses = 'leading-7 [&:not(:first-child)]:my-4'
  return (
    <>
    <LazyMotion features={domAnimation} strict>
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
      after:from-white/95 after:via-white/80 dark:after:from-neutral-900/95 dark:after:via-neutral-900/80 after:to-transparent
        '
      >
      <m.section
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
        className='text-neutral-700 dark:text-neutral-200  font-sans tracking-tight text-base md:p-12 my-16 grid h-fit'
      >
        <m.p className={paragraphClasses} variants={paragraphVariants}>
          I am consistently happy with my creative output. My job title includes designer, but Im incredibly good at designing something from scratch.
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
          None of work I create matches up to the work of designers that I admire. At a minimum, I want to feel more comfortable designing work that meets my own minimum expectations of quality. Impostor Syndrome probably plays a big part (especially working with such talented colleagues!) but maybe I simply need practice.
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
          Creativity is definitely my strong suit. Im logical. Building on past experience to improve future work is something I am good at. Creating something new is not. Thats why it feels like everything I create is a remix of my past work, or the work of others.
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
        Does this still count as my creative output, though? Id argue that anything new in design is just old stuff reworked in new ways. Buried in sarcasm, Mark Dalgleish explains that step in the design process:
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
        If youre a developer who finds design difficult, youre probably skipping the ‘inspiration’ phase—which, in non-designer speak, roughly translates to ‘look at other designs and rip off all the good ideas’.
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
        This is a totally valid way to work. Its probably the most efficient. Youre not the first person working on your problems, so use what other people have already discovered. But to what degree can we claim this work as our own?
        </m.p>
        <m.p variants={paragraphVariants}>
          None of work I create matches up to the work of designers that I admire. At a minimum, I want to feel more comfortable designing work that meets my own minimum expectations of quality. Impostor Syndrome probably plays a big part (especially working with such talented colleagues!) but maybe I simply need practice.
        </m.p>

        <m.p variants={paragraphVariants}>
          Creativity is not my strong suit. Im logical. Building on past experience to improve future work is something I am good at. Creating something new is not. Thats why it feels like everything I create is a remix of my past work, or the work of others.
        </m.p>

        <m.p variants={paragraphVariants}>
        Does this still count as my creative output, though? Id argue that anything new in design is just old stuff reworked in new ways. Buried in sarcasm, Mark Dalgleish explains that step in the design process:
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
        If youre a developer who finds design difficult, youre probably skipping the ‘inspiration’ phase—which, in non-designer speak, roughly translates to ‘look at other designs and rip off all the good ideas’.
        </m.p>

        <m.p className={paragraphClasses} variants={paragraphVariants}>
        This is a totally valid way to work. Its probably the most efficient. Youre not the first person working on your problems, so use what other people have already discovered. But to what degree can we claim this work as our own?
        </m.p>
      </m.section>
      </div>
    </LazyMotion>
    </>
  )
}

export default One