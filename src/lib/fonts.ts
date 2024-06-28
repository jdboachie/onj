import { Libre_Caslon_Text, Newsreader } from 'next/font/google'

export const newsreader = Newsreader({
  subsets: ['latin'],
})

export const librecaslontext = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})