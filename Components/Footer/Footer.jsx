import '../../Style/Footer/Footer.css';
import logo_footer from '../../src/assets/logo_footer.png';
import linkedln from '../../src/assets/linkedin.png';
import instagram from '../../src/assets/instagram.png';
import facebook from '../../src/assets/facebook.png';
import github from '../../src/assets/github.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="frame1">
                    <img className="logo_footer" src={logo_footer} alt="logo footer" />
                    <span className="titulo_img">STACK.</span>
                    <span className="subtitulo_img">Empilhando Inovação</span>
                </div>
                <div className="nav-bar">
                    <span className="titulo_link">Links</span>
                        <li className='lista'><Link to="/">Home</Link></li>
                        <li className='lista'><Link to="/empresa">Sobre nossa empresa</Link></li>
                        <li className='lista'><Link to="/equipe">Nossa equipe</Link></li>
                        <li className='lista'><Link to="/solucoes">Soluções</Link></li>
                        <li className='lista'><Link to="/contato">Contato</Link></li>
                </div>
                <div className="footer-contact">
                    <span className="contact">Fale Conosco</span>
                    <p className='duvida'>
                        Qualquer dúvida, por favor entre em contato conosco via E-mail.
                    </p>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedln} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <p className='copyryght'>© 2024 Copyright by Stack Corp®. All rights reserved.</p>
            </div>
        </footer>
    );
}
