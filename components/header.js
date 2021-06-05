import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="grid">
          <div className="column flex">
            <div className="logo">
              <Link href="/aline">
                <img src="./logo.svg" width={230} height={70} />
              </Link>
            </div>
          </div>
          <div className="column menu-header">
            <nav>
              <ul>
                <li>
                  <Link href="/aline/curriculo">
                    <a>Meu curriculo</a>
                  </Link>
                </li>
                <li>
                  <Link  href="aline/#servicos">
                    <a>Serviços</a>
                  </Link>
                </li>

                <li className="active">
                  <Link href="aline/contato">
                    <a href="#">Agende uma conversa</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
