import '../../Style/Footer/Footer.css';
import logo_footer from '../../src/assets/logo_footer.png';

export default function Footer(){
    return(
        <footer>
            <div className='frame1'>
                <img className='logo_footer' src={logo_footer} alt='logo footer'></img>
                <span className='titulo_img'>STACK.</span>
                <span className='subtitulo_img'>Empilhando Inovação</span>
            </div>
            <div className='frame2'>
                <div className='nav-bar'>
                    <span className='titulo_link'>Links</span>
                    <a href='#' className='link'>Home</a>
                    <a href='#' className='link'>Sobre nossa empresa</a>
                    <a href='#' className='link'>Nossa equipe</a>
                    <a href='#' className='link'>Soluções</a>
                    <a href='#' className='link'>Contato</a>
                </div>
            </div>
        </footer>
    )
}