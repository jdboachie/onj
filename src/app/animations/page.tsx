import Link from 'next/link'
import React from 'react'

function Animations() {
  return (
    <main
    className="font-sans md:p-24 px-12 divide-y divide-neutral-500 max-w-5xl mx-auto grid grid-rows-3 grid-cols-6 gap-1 justify-content-start h-screen"
  >
    <div className="">
      <Link
        href={'/'}
        className={`hover:text-neutral-950`}
        >
        &larr; back
      </Link>
    </div>
    <h1
      className={`text-3xl md:text-5xl grid col-span-6 font-sans`}
    >
      Animations
    </h1>
  </main>
  )
}

export default Animations