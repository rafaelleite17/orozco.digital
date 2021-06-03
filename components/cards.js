import Card from './card/index'
import * as Icon from "react-feather";
const dados = {
  nome: "",
  titulo: "",
  botao: {
    texto: "Meu site",
    url: "./aline",
    icon: <Icon.ArrowRight size={20} />
  },
};
export default function Cards() {
  return (
    <div className="">
      <div className="container">
        <div className="row center">
        <Card dados={dados} classe="card"></Card>
        </div>
      </div>
    </div>
  )
}
