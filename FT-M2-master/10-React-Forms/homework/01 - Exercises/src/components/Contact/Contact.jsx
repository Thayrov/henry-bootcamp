import React from 'react';
import './Contact.modules.css';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  return (
    <form>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input type='text' name='name' id='name' placeholder='Escribe tu nombre...' />
      </div>
      <div>
        <label htmlFor='email'>Correo Electrónico:</label>
        <input type='text' name='email' id='email' placeholder='Escribe tu email...' />
      </div>
      <div>
        <label htmlFor='message'>Mensage:</label>
        <textarea
          name='message'
          id='message'
          placeholder='Escribe tu mensaje...'
          type='text'></textarea>
      </div>
      <button type='submit'>enviar</button>
    </form>
  );
}
