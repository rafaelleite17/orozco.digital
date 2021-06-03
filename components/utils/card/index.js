import Link from 'next/link'
import * as Icon from 'react-feather';
const Card = ({dados,classe}) => {
    return(<>
    <div className={classe}>
    <div className="imagem">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExmMBHXJs3lQ/profile-displayphoto-shrink_800_800/0/1611880216706?e=1626912000&v=beta&t=r0GB230o_02GMJdT9ELCBpjp4KhJ9eWGrlIMhEjvXJY"/>
    </div>
    <div className="headers">
    <h2>{dados.nome}</h2>
    <p>{dados.titulo}</p>
    </div>
    <div> 

        <Link  href={`${dados.botao?.url}`}>
            <a className="btn icon">
            {dados.botao?.texto} 
            {dados.botao?.icon}
            </a>
        </Link>
    </div>
    </div>
    </>);

}
export default Card;