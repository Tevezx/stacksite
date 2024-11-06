import '../../Style/Equipe/Equipe.css';
import linha from '../../src/assets/linha.png';
import javascript from '../../src/assets/javas.png';
import node from '../../src/assets/node.png';
import css from '../../src/assets/css.png'; 
import sql from '../../src/assets/sql.png'; 
import react from '../../src/assets/react.png';
import ana from '../../src/assets/ana.png';
import carlos from '../../src/assets/carlos.png';
import davi from '../../src/assets/davi.png';
import eduardo from '../../src/assets/eduardo.png';
import gabriela from '../../src/assets/gabriela.png';
import endy from '../../src/assets/endy.png';
import miguel from '../../src/assets/miguel.png';
import { useState, useRef } from 'react';
import btn_left from '../../src/assets/btn_left.png';
import btn_right from '../../src/assets/btn_right.png';
import drive from '../../src/assets/drive.png';
import vs from '../../src/assets/vs.png';
import docker from '../../src/assets/docker.png';
import sql_img from '../../src/assets/sql_img.png';
import figma from '../../src/assets/figma.png';
import canva from '../../src/assets/canva.png';


const images = [javascript, node, css, sql, react];

const teamMembers = [
    { name: "Ana", image: ana, description: "Arquivista do Stack" },
    { name: "Carlos", image: carlos, description: "Desenvolvedor Front-end" },
    { name: "Davi", image: davi, description: "Desenvolvedor Mobile" },
    { name: "Eduardo", image: eduardo, description: "Desenvolvedor Front-end" },
    { name: "Gabriela", image: gabriela, description: "Designer ut" },
    { name: "Endy", image: endy, description: "Gerente de Projetos" },
    { name: "Miguel", image: miguel, description: "Desenvolvedor Full Stack" },
];

export default function Equipe() {
    const [currentTechSlide, setCurrentTechSlide] = useState(0);
    const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
    const techCarouselRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const nextTechSlide = () => {
        setCurrentTechSlide((prevSlide) => (prevSlide + 1) % Math.ceil(images.length / 3));
    };

    const prevTechSlide = () => {
        setCurrentTechSlide((prevSlide) => (prevSlide - 1 + Math.ceil(images.length / 3)) % Math.ceil(images.length / 3));
    };

    const nextTeamSlide = () => {
        setCurrentTeamSlide((prevSlide) => (prevSlide + 1) % teamMembers.length);
    };

    const prevTeamSlide = () => {
        setCurrentTeamSlide((prevSlide) => (prevSlide - 1 + teamMembers.length) % teamMembers.length);
    };

    const groupedImages = [
        images.slice(0, 3),
        images.slice(3)
    ];

    const handleTouchStartTech = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMoveTech = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            nextTechSlide();
            setIsDragging(false);
        } else if (diffX < -50) {
            prevTechSlide();
            setIsDragging(false);
        }
    };

    const handleTouchEndTech = () => {
        setIsDragging(false);
    };

    const handleMouseDownTech = (e) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMoveTech = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            nextTechSlide();
            setIsDragging(false);
        } else if (diffX < -50) {
            prevTechSlide();
            setIsDragging(false);
        }
    };

    const handleMouseUpTech = () => {
        setIsDragging(false);
    };

    return (
        <section className="equipe-container">
            <div className="section-equipe">
                <div className="linha-equipe">
                    <img src={linha} alt="Linha decorativa no topo" />
                </div>
                <div className="text-equipe">
                    <h1>
                        <span className="text-tecnologia">Tecnologias</span>
                        <span className="text-usadas"> usadas</span>
                        <span className="text-nossa"> pela nossa equipe</span>
                    </h1>
                </div>
                <div
                    className="carousel-container"
                    onTouchStart={handleTouchStartTech}
                    onTouchMove={handleTouchMoveTech}
                    onTouchEnd={handleTouchEndTech}
                    onMouseDown={handleMouseDownTech}
                    onMouseMove={handleMouseMoveTech}
                    onMouseUp={handleMouseUpTech}
                    onMouseLeave={handleMouseUpTech}
                    ref={techCarouselRef}
                >
                    <div className="carousel" style={{ transform: `translateX(-${currentTechSlide * 100}%)` }}>
                        {groupedImages.map((group, slideIndex) => (
                            <div className="carousel-slide" key={slideIndex}>
                                {group.map((image, index) => (
                                    <img src={image} alt={`Slide ${slideIndex + 1} - Imagem ${index + 1}`} key={index} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="carousel-dots">
                        {groupedImages.map((_, dotIndex) => (
                            <div
                                key={dotIndex}
                                className={`dot ${dotIndex === currentTechSlide ? 'active' : ''}`}
                                onClick={() => setCurrentTechSlide(dotIndex)} 
                            />
                        ))}
                    </div>
                    <div className='conheca'>
                        <span className='conhecanossa'>Conheça nossa</span>
                        <span className='conheca-equipe'> Equipe</span>
                    </div>
                </div>

                <div className="team-slide">
                    <div className="carousel-container-team">
                        <div className="carousel-slide-team">
                            <div className="member-card">
                                <img className="member-image" src={teamMembers[currentTeamSlide].image} alt={teamMembers[currentTeamSlide].name} />
                                <h2 className='h2-membros'>{teamMembers[currentTeamSlide].name}</h2>
                                <p className='desc-membros'>{teamMembers[currentTeamSlide].description}</p>
                            </div>
                        </div>
                        <div className="carousel-controls-team">
                            <button onClick={prevTeamSlide} className="carousel-button"><img src={btn_left} alt="Anterior" /></button>
                            <button onClick={nextTeamSlide} className="carousel-button"><img src={btn_right} alt="Próximo" /></button>
                        </div>
                        <div className="carousel-dots-team">
                            {teamMembers.map((_, dotIndex) => (
                                <div
                                    key={dotIndex}
                                    className={`dot-team ${dotIndex === currentTeamSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentTeamSlide(dotIndex)} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='ferramentas_equipe'>
                    <img src={linha} className='linha_ferramentas' alt="linha decorativa" />
                    <div className='txt_ferramentas'>
                        <span className='ferramentas_utili'>Ferramentas</span>
                        <span className='utili_equipe'> utilizadas</span>
                    </div>
                </div>
                <div className="info-card-container">
                    <div className="info-card">
                        <div className="info-content">
                            <img src={drive} alt="google drive logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">Google Cloud</h3>
                                <p className="info-description">
                                    <p>O Google Cloud Platform é o mais completo software existente hoje no mercado, Com ele é possível desenvolver aplicativos personalizados, estabelecer programas de gerenciamento de Customer Relationship Management.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-content">
                            <img src={vs} alt="Visual Studio Code logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">Visual Studio Code</h3>
                                <p className="info-description">
                                    <p>O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-content">
                            <img src={docker} alt="Docker logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">Docker</h3>
                                <p className="info-description">
                                    <p>Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-content">
                            <img src={sql_img} alt="Sql logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">SQL Server</h3>
                                <p className="info-description">
                                    <p>O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional desenvolvido pela Sybase em parceria com a Microsoft.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-content">
                            <img src={figma} alt="Figma Logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">Figma</h3>
                                <p className="info-description">
                                    <p>Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-content">
                            <img src={canva} alt="Canva Logo" className="info-image"/>
                            <div className="info-text">
                                <h3 className="info-title">Canva</h3>
                                <p className="info-description">
                                    <p>Canva é uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
}
