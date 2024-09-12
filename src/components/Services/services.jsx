import React from 'react'
import './services.css';
import shining from '../../assets/shining.png';
import drilling from '../../assets/drilling.png';

const Services = () => {
  return (
    <>
      <div id='services'>
        <h2>NOS SERVICES</h2>
        <div className='service'>
          <div className='blanchiment'>
            <h3>Blanchiment Dentaire</h3>
            <p>Nous utilisons des techniques avancées et des produits de qualité pour garantir des résultats sûrs et efficaces.</p>
            <img src={shining} />
          </div>
          <div className='detartage'>
            <h3>Détartage</h3>
            <p>Nos professionnels qualifiés réalisent des détartrages approfondis pour éliminer le tartre et la plaque dentaire, favorisant ainsi une santé buccale optimale.</p>
            <img src={drilling} />
          </div>
        </div>
      </div>
      <div className='appointement'>
        <div className='books'>
          <p className='book'>Réservez votre rendez-vous aujourd'hui</p>
          <p className='sante'>et prenez en main votre santé!</p> 
          <button className='btnp'>Programmer un rendez-vous</button>
        </div>
      </div>
    </>
  )
}

export default Services