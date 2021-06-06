import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Icon from "react-feather";

const handleClick = (href) => {
  e.preventDefault();
  router.push(href);
};
const menu = [
  {
    href: "/aline/curriculo",
    nome: "Meu curriculo",
  },
  {
    href: "/aline/#servicos",
    nome: "Serviços",
  },
  {
    href: "aline/contato",
    nome: "Agende uma conversa",
    classe: 'active'
  },
];

const Header = () => {
  const router = useRouter();
  const [sidebar, setSideBar] = useState(false);
  const clickSidebar = (value) => {
    setSideBar(value);
  };
  const [pagina, setPagina] = useState(router.asPath);

  useEffect(() => {
    console.log(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <header>
        <div className="grid">
          <div className="column flex">
            <div className="logo">
              <a href="/aline">
                <img src="./logo.svg" width={230} height={70} />
              </a>
              <div
            onClick={() => {
              clickSidebar(!sidebar);
            }}
            className={`menu-btn ${!sidebar ? "" : "active"}`}
          >
            {!sidebar ? <Icon.Menu /> : <Icon.X />}
          </div>
            </div>
          </div>
          <div className="column menu-header">
       
            <nav>
              <ul>
                {menu.map((item) => (
                  <li className={item.classe} >
                    <a onClick={() => router.push(`${item.href}`)}>
                      {item.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

  
        </div>
        <div className={`menu-scroll ${sidebar ? "show" : "hidden"}`}>
          <nav>
            <ul>
              {menu.map((item) => (
                <li className={item.classe} >
                  <a onClick={() => router.push(`${item.href}`)}>{item.nome}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    
      </header>
    </>
  );
};
export default Header;
