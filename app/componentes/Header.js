import "../styles/StylesHeader.css";

export default function Header() {
    return (
        <div className="header-content">
            <img className="img-logo" src="/imagenes/logo-elektra.svg" alt="logo" />
            <div className="input-container">
                <input type="text" className="input" placeholder="Buscar" />
                <div className="search-icon">
                </div>
            </div>
            <button className="login-button">¡Hola! Inicia sesión</button>

        </div>
    );
}
