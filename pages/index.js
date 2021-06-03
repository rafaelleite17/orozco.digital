import Head from 'next/head'
import Cards from '../components/cards'
export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Cards></Cards>
      </main>
    </div>
  )
}
