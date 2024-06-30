import { librecaslontext } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

function Animations() {
  return (
    <>
    <div className="items-end grid">
      <Link
        href={'/'}
        className={`hover:text-neutral-950 dark:hover:text-white`}
        >
        &larr; back
      </Link>
    </div>
    <div className="grid">
      <h1
        className={`text-3xl md:text-5xl tracking-tight`}
      >
        Typo<span className={`italic ${librecaslontext.className}`}>graphy</span>
      </h1>
    </div>
  </>
  )
}

export default Animations