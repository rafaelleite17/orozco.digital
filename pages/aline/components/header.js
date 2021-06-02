import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header>
        <div className="grid">
          <div className="column flex">
            <div className="logo">
              
     

<Link 
   href="/aline"
  >
<Image
        src="/logo.svg"
        alt="Picture of the author"
        width={230}
        height={70}
      />
        </Link>
            
             </div>
          </div>
          <div className="column menu-header">
            <nav>
              <ul>
                <li>
                <Link href="/aline/curriculo">
            <a>
            Meu curriculo
            </a>
        </Link>
        </li><li>
          
        <Link  href={'meucurriculo'}>
            <a>
            Serviços
            </a>
        </Link>
                </li>
              
           
                <li className="active">
                  <a href="#">Agende uma conversa</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header