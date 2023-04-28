import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Board from '@/components/Board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
      <section className='flex'>
        <Sidebar />
        <Board />
      </section>
      
    </main>
  )
}
