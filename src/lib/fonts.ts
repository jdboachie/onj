import { Inter_Tight, Libre_Caslon_Text } from 'next/font/google'

export const sans = Inter_Tight({
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export const librecaslontext = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})