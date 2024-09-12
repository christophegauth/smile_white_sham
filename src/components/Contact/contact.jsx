import React from 'react'
import './contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const validatePhoneNumber = (phoneNumber) => {
    // Expression régulière pour les numéros de téléphone uniquement numériques
    const phonePattern = /^[0-9]+$/;
    return phonePattern.test(phoneNumber);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const phoneNumber = form.phone.value;

    // Validation personnalisée du numéro de téléphone
    if (!validatePhoneNumber(phoneNumber)) {
      setResult("Le numéro de téléphone doit contenir uniquement des chiffres.");
      return;
    }

    setResult("Envoi en cours...");
    const formData = new FormData(form);

    formData.append("access_key", "3f0678ae-259e-45c7-97e9-5bcd0ee66796");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulaire soumis avec succès");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error", error);
      setResult("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div id='contact'>
      <div className='contact-col'>
        <h2>CONTACTEZ-NOUS</h2>
        <ul>
          <li><img src={mail_icon} alt='' /> contact@smilewithsham.com</li>
          <li><img src={phone_icon} alt='' />+229 57083133</li>
          <li><img src={location_icon} alt='' />AGLA, COTONOU<br/> Benin</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Nom</label>
          <input type='text' name='name' placeholder='Entrez votre nom' required />
          <label>Numéro</label>
          <input 
            type='tel' 
            name='phone' 
            placeholder='Entrez votre numéro de téléphone' 
            required
          />
          <label>Message</label>
          <textarea name='message' rows='6' placeholder='Saisissez votre message...' required></textarea>
          <button type='submit' className='btnn dark-btn'>Envoyer</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
