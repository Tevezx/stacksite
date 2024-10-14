import { useState } from 'react';
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
                    <img className='logo' src={logotipo} alt='Logo' />
                </div>
                <div className="menu-toggle-container">
                    <button className='menu-toggle' onClick={toggleMenu}>
                        <img src={menuIcon} alt='Menu Icon'/>
                    </button>
                </div>
                {isOpen && (
                    <div className='menu'>
                        <a href="#" onClick={toggleMenu}>Home</a>
                        <a href="#" onClick={toggleMenu}>Sobre Nossa Empresa</a>
                        <a href="#" onClick={toggleMenu}>Nossa Equipe</a>
                        <a href="#" onClick={toggleMenu}>Soluções</a>
                    </div>
                )}
            </nav>
        </header>
    );
}
