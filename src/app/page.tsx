import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { librecaslontext } from "@/lib/fonts";

export default function Home() {

  return (
    <main
      className="md:px-24 px-12 py-24 max-w-5xl mx-auto grid grid-rows-3 grid-cols-1 gap-2 md:gap-6 justify-content-start h-screen"
    >
      <div className="">
        <Link
          href={'https://read.cv/jood'}
          className={`hover:text-neutral-950 dark:hover:text-white`}
          >
          Jude Boachie
        </Link>
      </div>
      <div className=" grid">
        <h1
          className={`text-3xl md:text-6xl tracking-tight`}
          >
          Learning about web {' '}
          <span className={`italic ${librecaslontext.className}`}>craft</span>,
          <br/>
          bringing {' '}
          <span className={`${GeistMono.className}`}>software </span>{' '}
          to life.
        </h1>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3">
        <div className="">
          <Link href={'/animations'} className="hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in">/animations</Link>
        </div>
        <div className={``}>
          <Link href={'/typography'} className={`hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in`}>/typography</Link>
        </div>
      </div>
    </main>
  );
}
