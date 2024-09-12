import React from 'react'
import logo from '../../assets/logo.png';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <button className='btns'>Programmer un rendez-vous</button>
      <div className='col11'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='media'>
          <h2>Suivez-nous :</h2>
          <div className='media_link'>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          Copyright &#169; 2024 Christophe SOKPOLY. All right received.
        </a>
      </div>
    </div>
  )
}

export default Footer