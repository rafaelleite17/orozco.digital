import Head from 'next/head'
import Home from './home'
export default function Index() {
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
