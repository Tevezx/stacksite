import '../../Style/Solucoes/Solucoes.css';
import linha_solucoes from '../../src/assets/linha.png';
import img_telas_app from '../../src/assets/Case-study__image.png';
import vector from '../../src/assets/Vector.png';
import { Link } from 'react-router-dom';

export default function Solucoes() {
    return (
        <section className='Solucao-container'>
            <div className='linha_solucoes1'>
                <img src={linha_solucoes} alt="Linha Soluções" />
            </div>
            <span className='titulo_solucoes1'>
                O que são <span className='txtSolucao'>Soluções</span>?
            </span>
            <p className='textInicial'>
            Nossas soluções são aplicativos desenvolvidos para facilitar o dia a dia e resolver problemas comuns de forma prática e eficiente. Eles foram projetados para atender às necessidades dos usuários, oferecendo funcionalidades que simplificam tarefas cotidianas, Com uma interface intuitiva e recursos personalizados, nossos aplicativos visam não apenas economizar tempo, mas também proporcionar mais qualidade de vida, permitindo que você se concentre no que realmente importa. A tecnologia a serviço da sua rotina!
            </p>
            <img src={linha_solucoes} className='linha_solucoes' alt="Linha Soluções" />
            <span className='titulo2_solucoes'>
                Nossas <span className='txt_nossas_solucoes'>Soluções</span>
            </span>
            <img className='img_telas_app' src={img_telas_app} alt="Tela do Aplicativo" />
            <span className='titulo_mgp'>MGP - Meu Guia Pessoal</span>
            <p className='descricao_mgp'>Inspirado por uma visão focada em oferecer o melhor serviço possível, o MGP - Meu Guia Pessoal oferece as melhores soluções, nosso aplicativo se destaca pela sua interface intuitiva e recursos personalizados que tornam a navegação rápida e eficiente.</p>
            <a className='btn_link' style={{ fontSize: 14 }} href="https://github.com" target="_blank" rel="noopener noreferrer">
                Visualizar mais no Git-Hub <img className='img_vector' src={vector} alt="Vector" />
            </a>
            <span className='emBreve'>- Mais soluções em breve -</span>
        </section>
    );
}
