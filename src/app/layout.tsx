import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from '@/src/components/Sidebar'
import SupabaseProvider from '@/src/providers/SupabaseProvider'
import UserProvider from '@/src/providers/UserProvider'
import ModalProvider from '@/src/providers/ModalProvider'
import ToasterProvider from '@/src/providers/ToasterProvider'
import getSongsByUserId from '@/src/actions/getSongsByUserId'
import { Player } from '@/src/components/Player'
const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
