import Head from 'next/head'
import Cards from '../components/utils/card/index'
import * as Icon from 'react-feather';
const dados = {
  nome: "",
  titulo: "",
  botao: {
    texto: "Meu curriculo",
    url: "aline",
    icon: <Icon.ArrowRight size={20} />
  },
};
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Cards dados={dados}></Cards>
      </main>
    </div>
  )
}
