import { librecaslontext } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

function Animations() {
  return (
    <main
    className="md:px-24 px-12 py-24 max-w-5xl mx-auto grid grid-rows-3 grid-cols-1 gap-2 md:gap-6 justify-content-start h-screen"
  >
    <div className="">
      <Link
        href={'/'}
        className={`hover:text-neutral-950 dark:hover:text-white`}
        >
        &larr; back
      </Link>
    </div>
    <div className=" grid">
      <h1
        className={`text-3xl md:text-5xl tracking-tight`}
      >
        Typo
        <span className={`italic ${librecaslontext.className}`}>graphy</span>
      </h1>
    </div>
  </main>
  )
}

export default Animations