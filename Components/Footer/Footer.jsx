import '../../Style/Footer/Footer.css';
import logo_footer from '../../src/assets/logo_footer.png';
import linkedln from '../../src/assets/linkedin.png';
import instagram from '../../src/assets/instagram.png';
import facebook from '../../src/assets/facebook.png';
import github from '../../src/assets/github.png';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
            <div className="frame1">
                <img className="logo_footer" src={logo_footer} alt="logo footer" />
                <span className="titulo_img">STACK.</span>
                <span className="subtitulo_img">Empilhando Inovação</span>
            </div>
            <div className="footer-container">
                <div className="nav-bar">
                    <span className="titulo_link">Links</span>
                    <ul className="lista">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/empresa">Sobre nossa empresa</Link></li>
                        <li><Link href="/equipe">Nossa equipe</Link></li>
                        <li><Link href="/solucoesç/mjlk">Soluções</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <span className="contact">Fale Conosco</span>
                    <p className='duvida'>
                        Qualquer dúvida, por favor entre em contato conosco via E-mail.
                    </p>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com"><img src={facebook} alt="Facebook"/></a>
                    <a href="https://instagram.com"><img src={instagram} alt="Instagram"/></a>
                    <a href="https://github.com"><img src={github} alt="GitHub"/></a>
                    <a href="https://linkedin.com"><img src={linkedln} alt="LinkedIn"/></a>
                </div>
                <div className="footer-copyright">
                    <p className='copyryght'>© 2024 Copyright by Stack Corp®. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
