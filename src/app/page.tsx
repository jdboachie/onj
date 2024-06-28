import { librecaslontext, newsreader } from "@/lib/fonts";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";

export default function Home() {

  return (
    <main
      className="font-sans md:p-24 px-12 max-w-4xl mx-auto grid grid-rows-3 grid-cols-6 gap-1 justify-content-start h-screen"
    >
      <div className="">
        <Link
          href={'https://read.cv/jood'}
          className={`hover:text-neutral-950`}
          >
          Jude Boachie
        </Link>
      </div>
      <div className="grid col-span-6">
        <h1
          className={`text-3xl md:text-5xl`}
          >
          Learning about {' '}
          <span className={`italic ${librecaslontext.className}`}>craft</span>,
          <br/>
          bringing {' '}
          <span className={`font-mono`}>software</span>{' '}
          to life.
        </h1>
      </div>
      <div>
        <Link href={'/animations'} className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors duration-300 ease-in">/animations</Link>
      </div>
      <div>
        <Link href={'/typography'} className={`hover:text-neutral-950 hover:underline underline-offset-4 transition-colors duration-300 ease-in`}>/typography</Link>
      </div>
    </main>
  );
}
