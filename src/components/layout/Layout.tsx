import type { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className='bg-cover bg-no-repeat bg-center h-screen relative'
      style={{ backgroundImage: "url('images/bg-ff.jpg')" }}
    >
      <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(circle, rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)]' />

      <div className='relative h-full'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
