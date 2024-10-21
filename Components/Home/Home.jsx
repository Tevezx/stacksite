import '../../Style/Home/Home.css';
import estrela from '../../src/assets/estrela.png';
import fundo from '../../src/assets/fundo.png';
import logo_home from '../../src/assets/logo_home.png';
import degrade from '../../src/assets/degrade.png';
import estrela_pequena from '../../src/assets/estrela_pequena.png'

export default function Home() {
    return (
        <section className="home-container">
            <div className='estrela'>
                <img src={estrela} alt="estrela"/>
            </div>
            <div className='logo_home'>
                <img src={logo_home} alt='home'/>
                <p className='descricao_logo'>Lorem Ipsumis simply dummy text of the printing and typesetting industry.</p>
                <a href='#'>See more Informations ➜</a>
            </div>  
>>>>>>> 50396a62466897653b5f5dcdfd8a313d5472230b
            <div className='estrela2'>
                <img src={estrela_pequena} alt='estrela2'/>
            </div>
            <div className='ilustração'>
                <img src={fundo} alt='fundo'/>
            </div>
            <div className='estrela3'>
                <img src={estrela} alt='estrela3'/>
            </div>
        </section>
    );
}
