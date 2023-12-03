import React from 'react';
import './Contact.modules.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = inputs => {
  const errors = {};
  if (!inputs.name) errors.name = 'Se requiere un nombre';
  if (!regexEmail.test(inputs.email)) errors.email = 'Debe ser un correo electrónico';
  if (!inputs.message) errors.message = 'Se requiere un mensaje';
  return errors;
};

export default function Contact() {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const [inputs, setInputs] = React.useState(initialState);
  const [errors, setErrors] = React.useState(initialState);

  const handleChange = e => {
    const {name, value} = e.target;
    setInputs(prev => ({...prev, [name]: value}));
    setErrors(validate({...inputs, [name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      window.alert('Datos completos');
      setInputs(initialState);
      setErrors(initialState);
    } else {
      window.alert('Debe llenar todos los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Escribe tu nombre...'
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && 'warning'}
        />
        <p className='danger'>{errors.name}</p>
      </div>
      <div>
        <label htmlFor='email'>Correo Electrónico:</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Escribe tu email...'
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && 'warning'}
        />
        <p className='danger'>{errors.email}</p>
      </div>
      <div>
        <label htmlFor='message'>Mensaje:</label>
        <textarea
          name='message'
          id='message'
          placeholder='Escribe tu mensaje...'
          type='text'
          value={inputs.message}
          className={errors.message && 'warning'}
          onChange={handleChange}></textarea>
        <p className='danger'>{errors.message}</p>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}
