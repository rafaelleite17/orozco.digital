import * as Icon from "react-feather";
export default function Layout({ children }) {
    return (
        <>
        {children}
        <footer>
        <div className="container "> 
        <div className="grid grid-fr-fr">
        <div className="links">
        <a href="#">Ajuda</a>
        <a href="#">Contato comercial</a>
        <a href="#">Temos e politicas</a>
        <a href="#">Blog</a>
        </div>
        <div className="flex">
        <div className="redes">
            <a href="#" className="btn">
              <Icon.Instagram size={15} />
            </a>
            <a href="#" className="btn">
              <Icon.Facebook size={15} />
            </a>
            <a href="#" className="btn">
              <Icon.Linkedin size={15} />
            </a>
            <a href="#" className="btn">
              <Icon.Twitter size={15} />
            </a>
          </div>
        </div>
        </div>
        <p>Copyright © 2021 ~ Aline Orozco</p>
        </div>
      </footer>
        </>
    )
  }