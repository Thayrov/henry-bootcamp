import React from 'react';
import {useDispatch} from 'react-redux';
import {enviarForm} from '../../redux/actions/actions';
const ContactUs = () => {
  const dispatch = useDispatch();
  const initialForm = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  };
  const [form, setForm] = React.useState(initialForm);
  const handleInput = e => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(enviarForm(form));
    setForm(initialForm);
  };
  return (
    <div>
      <form className='contactBg' onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre: </label>
        <input name='nombre' onChange={handleInput} />
        <label htmlFor='email'>Email: </label>
        <input name='email' onChange={handleInput} />
        <label htmlFor='asunto'>Asunto: </label>
        <input name='asunto' onChange={handleInput} />
        <label htmlFor='mensaje'>Mensaje: </label>
        <input name='mensaje' onChange={handleInput} />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
