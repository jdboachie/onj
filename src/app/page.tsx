import Link from "next/link";
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
        <div className="grid items-center">
          <h1
            className={`text-4xl sm:text-5xl`}
            >
            Designing {' '} &nbsp;<span className={`italic ${librecaslontext.className}`}>systems</span>
            <br/>
            around code for people.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
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
