"use client"
import { useState } from 'react';
import "../styles/tylesMain.css"

const images = [
    '/imagenes/1.webp',  '/imagenes/2.webp','/imagenes/3.webp',
];

export default function Main({game}) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="contenido-main">
            <div className="slider">
                <img className="img-logo" src={images[currentImage]} alt="logo" />
                <div className="button-container">
                    <button onClick={previousImage}>Anterior</button>
                    <button onClick={nextImage}>Siguiente</button>
                </div>
            </div>
            <div>
                 
            </div>

            <img className="img-logo" src="/imagenes/5.webp" alt="logo" />


            <h1>Lo mas hot</h1>

            <div className="cards-container">
                <div className="card">
                    <img className="img-logo" src="/img/6.webp" alt="logo"/>
                   
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/5.webp" alt="logo"/>
              
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/7.webp" alt="logo"/>
            
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/8.webp" alt="logo"/>
                
                </div>
            </div>

            <img className="img-logo" src="/imagenes/6.webp" alt="logo"/>


            <h2>Descubre</h2>
            <div className="cards-container">
                <div className="card">
                    <img className="img-logo" src="/img/patio.webp" alt="logo"/>
                    <h2>Patio y jardin</h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/muebles.webp" alt="logo"/>
                    <h2>Muebles y TV</h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/colchones.webp" alt="logo"/>
                    <h2>Colchones</h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/blancos.webp" alt="logo"/>
                    <h2>Blancos</h2>
                </div>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img className="img-logo" src="/img/belleza.webp" alt="logo"/>
                    <h2>Belleza

                    </h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/ropa.webp" alt="logo"/>
                    <h2>Ropa</h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/moda.webp" alt="logo"/>
                    <h2>Moda y accesorios

                    </h2>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/perfumes.webp" alt="logo"/>
                    <h2>Perfumes</h2>
                </div>
            </div>


            <div className="cards-container">
                <div className="card">
                    <img className="img-logo" src="/imagenes/7.webp" alt="logo"/>

                </div>
                <div className="card">
                    <img className="img-logo" src="/imagenes/8.webp" alt="logo"/>
                </div>

            </div>

            <h2>Tiendas Oficiales</h2>

            <div className="cards-container">
                <div className="card">
                    <img className="img-logo" src="/img/t1.webp" alt="logo"/>

                </div>
                <div className="card">
                    <img className="img-logo" src="/img/t2.webp" alt="logo"/>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/t3.webp" alt="logo"/>
                </div>
                <div className="card">
                    <img className="img-logo" src="/img/t4.webp" alt="logo"/>
                </div>
            </div>

            <h2>Servicios Financieros</h2>
            <img className="img-logo" src="/imagenes/9.webp" alt="logo"/>
        

        </div>
    );
}
