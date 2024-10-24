import '../../Style/Equipe/Equipe.css';
import linha from '../../src/assets/linha.png';
import javascript from '../../src/assets/javas.png';
import node from '../../src/assets/node.png';
import css from '../../src/assets/css.png'; 
import sql from '../../src/assets/sql.png'; 
import react from '../../src/assets/react.png';
import { useState, useRef } from 'react';

export default function Equipe() {
    const images = [javascript, node, css, sql, react];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
    };

    const groupedImages = [
        images.slice(0, 3),
        images.slice(3)
    ];

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            nextSlide();
            setIsDragging(false);
        } else if (diffX < -50) {
            prevSlide();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    
    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            nextSlide();
            setIsDragging(false);
        } else if (diffX < -50) {
            prevSlide();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <section className="equipe-container">
            <div className="section-equipe">
                <div className="linha_equipe">
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
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    ref={carouselRef}
                >
                    <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
                                className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(dotIndex)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
