import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Header/Header.css';
import logotipo from '../../src/assets/logotipo.png';
import menuIcon from '../../src/assets/menu.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className="logo-container">
                    <Link to="/stacksite"><img className='logo' src={logotipo} alt='Logo' /></Link>
                </div>
                <div className="menu-toggle-container">
                    <button className='menu-toggle' onClick={toggleMenu}>
                        <img src={menuIcon} alt='Menu Icon'/>
                    </button>
                </div>
                {isOpen && (
                    <div className='menu'>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/empresa" onClick={toggleMenu}>Sobre Nossa Empresa</Link>
                        <Link to="/equipe" onClick={toggleMenu}>Nossa Equipe</Link>
                        <Link to="/solucoes" onClick={toggleMenu}>Soluções</Link>
                        <Link to="/contato" onClick={toggleMenu}>Contato</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}