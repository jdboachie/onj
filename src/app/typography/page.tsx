import { librecaslontext } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

function Animations() {
  return (
    <>
    <div className="items-end grid">
      <Link
        href={'/'}
        className={`w-fit hover:text-neutral-950 dark:hover:text-white`}
        >
        &larr; back
      </Link>
    </div>
    <div className="grid">
      <h1
        className={`grid items-center text-4xl sm:text-5xl tracking-tight`}
      >
        Typo<span className={`italic ${librecaslontext.className}`}>graphy</span>
      </h1>
    </div>
  </>
  )
}

export default Animations