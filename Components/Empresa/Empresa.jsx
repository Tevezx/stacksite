import '../../Style/Empresa/Empresa.css';
import linha from '../../src/assets/linha.png';
import image1 from '../../src/assets/image1.png';
import image2 from '../../src/assets/image2.png';

export default function Empresa() {
    return (
        <section className="empresa-container">
            <div className="section-content">
                <div className="text-content">
                    <div className="linha">
                        <img src={linha} alt="Linha decorativa no topo" />
                    </div>
                    <h2>Conheça um pouco mais</h2>
                    <h1>
                        <span className="sobre-nossa">Sobre Nossa</span>
                        <span className="empresa-gradient"> Empresa</span>
                    </h1>
                    <p>
                        O nome "Stack" foi escolhido para refletir os valores de nossa equipe, 
                        simbolizando a acumulação de soluções e conhecimentos. A nossa missão é 
                        proporcionar os mais diversos softwares que atendam e satisfaçam as necessidades 
                        do usuário, tornando algumas tarefas do cotidiano mais simples!
                    </p>       
                </div>
                <div className="image-content">
                    <img src={image2} alt="Trabalhando em equipe" />
                </div>
            </div>
            <div className="section-content">    
                <div className="text-content direita">
                    <div className="linha2">
                        <img src={linha} alt="Linha decorativa no topo" />
                    </div>
                    <h2>Conheça um pouco mais</h2>
                    <h1>
                        <span className="sobre-nossa">Sobre Nossos</span>
                        <span className="empresa-gradient"> Valores</span>
                    </h1>
                    <p>
                        A visão da empresa é ser reconhecida por sua excelência em acumular soluções, 
                        conhecimentos e tecnologias. Nossos principais valores são a Honestidade, Qualidade, 
                        Liderança, Paixão, Impacto, Comunicação e Responsabilidade.
                    </p>
                </div>                    
                <div className="image-content esquerda">
                    <img src={image1} alt="Discussão de ideias" />
                </div>   
            </div>
        </section>
    );
}
