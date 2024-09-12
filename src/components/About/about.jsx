import React from 'react'
import './about.css';
import young from '../../assets/young_african.jpg';

const About = () => {
  return (
    <div id='about'>
      <div className='propos'>
        <h2>À PROPOS DE NOUS</h2>
        <img src={young}/>
      </div>
      <div>
        <p className='about_title'>Nous sommes dédiés à vous offrir un sourire éclatant et une santé bucco-dentaire optimale.</p>
        <p>Notre mission est de transformer votre sourire en une source de confiance et de bien-être. Nous nous engageons à fournir des soins dentaires de haute qualité dans un environnement accueillant et professionnel. Nous prenons le temps de comprendre vos besoins et de vous proposer des solutions adaptées pour vous offrir un sourire resplendissant. Grâce à notre expertise en blanchiment dentaire et en détartrage, nous vous aidons à obtenir des résultats visibles et durables tout en préservant la santé de vos dents et de vos gencives.</p>
      </div>

    </div>
  )
}

export default About