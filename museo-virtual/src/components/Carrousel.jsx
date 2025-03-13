import React from 'react';
import museoDelPrado from '../images/MuseoDelPrado.jpg';
import museoLouvre from '../images/MuseoLouvre.jpg'
import museoMetropolitano from '../images/MuseoMetropolitanoDeArte.jpg'

function Carrousel() {
    return (
        <div id="demo" className="carousel slide m-5" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={museoDelPrado} className="d-block mx-auto rounded" style={{ width: '60%' }} alt="Museo del Prado" />
                    <div className="carousel-caption">
                        <h3>Madrid</h3>
                        <p>Museo del Prado</p>

                    </div>
                </div>

                <div className="carousel-item">
                    <img src={museoLouvre} className="d-block mx-auto rounded" style={{ width: '60%' }} alt="Museo del Louvre" />
                    <div className="carousel-caption">
                        <h3>Paris</h3>
                        <p>Museo del Louvre</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={museoMetropolitano} className="d-block mx-auto rounded" style={{ width: '60%' }} alt="Museo Metropolitano del Arte" />
                    <div className="carousel-caption">
                        <h3>Nueva York</h3>
                        <p>Museo Metropolitano del Arte</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrousel;
