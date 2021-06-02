import Head from 'next/head'
import Header from '@components/Header'
import Home from './home'
export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home></Home>
      </main>
    </div>
  )
}
