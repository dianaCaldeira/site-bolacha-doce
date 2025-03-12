import "./header.css";
import logo from "../../../image/logo.png";

function Header() {
  return (
    <header className="header-container">
      <div className="header-button">
        <button>Home</button>
        <button>Sobre</button>
      </div>

      <div className="header-logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>

      <div className="header-button">
        <button>Convites</button>
        <button>Contato</button>
      </div>
    </header>
  );
}

export default Header;