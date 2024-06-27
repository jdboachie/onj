'use client'

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Libre_Caslon_Text, Newsreader } from 'next/font/google'


const newsreader = Newsreader({
  subsets: ['latin'],
})

const librecaslontext = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {

  const { scrollYProgress } = useScroll()

  return (
    <main className="font-sans p-24 max-md:px-12 max-w-5xl mx-auto grid grid-cols-6 justify-content-start h-screen">
      <Link href={'https://read.cv/jood'} className={``}>Jude Boachie</Link>
      <h1 className={`text-5xl grid col-span-6 ${librecaslontext.className}`}>
        Learning about web craft,<br/>
        bringing software to life.
      </h1>
      <div className="grid col-span-2">Great stuff coming...</div>
    </main>
  );
}
