import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { librecaslontext } from "@/lib/fonts";

export default function Home() {

  return (
    <>
      <div className="items-end grid">
        <Link
          href={'https://read.cv/jood'}
          className={`hover:text-neutral-950 dark:hover:text-white`}
          >
          Jude Boachie
        </Link>
      </div>
      <div className="grid">
        <h1
          className={`text-3xl md:text-5xl tracking-tight`}
          >
          Designing {' '}
          <span className={`italic ${librecaslontext.className}`}>systems</span>
          <br/>
          around <span className={`${GeistMono.className}`}>code</span><span className="border-r-black dark:border-r-white border-r-2 animate-pulse" /> for people.
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="">
          <Link href={'/animations'} className="hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in">/animations</Link>
        </div>
        <div className={``}>
          <Link href={'/typography'} className={`hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in`}>/typography</Link>
        </div>
      </div>
    </>
  );
}
