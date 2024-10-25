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

const images = [javascript, node, css, sql, react];

const teamMembers = [
    { name: "Ana", image: ana, description: "Desenvolvedora Front-end" },
    { name: "Carlos", image: carlos, description: "Desenvolvedor Back-end" },
    { name: "Davi", image: davi, description: "Especialista em UX/UI" },
    { name: "Eduardo", image: eduardo, description: "Engenheiro de Dados" },
    { name: "Gabriela", image: gabriela, description: "Analista de Sistemas" },
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

    return (
        <section className="equipe-container">
            <div className="section-equipe">
                <div className="linha-equipe">
                    <img src={linha} alt="Linha decorativa no topo" />
                </div>
                <div className="text-equipe">
                    <h1>
                        <span className="text-conheca">Conheça as</span>
                        <span className="text-tecnologia"> Tecnologias</span>
                        <span className="text-usadas"> usadas</span>
                        <span className="text-nossa"> pela nossa equipe</span>
                    </h1>
                </div>
                <div
                    className="carousel-container"
                    onTouchStart={handleTouchStartTech}
                    onTouchMove={handleTouchMoveTech}
                    onTouchEnd={handleTouchEndTech}
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
                    <h2>Membros da Equipe</h2>
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
            </div>
        </section>
    );
}
