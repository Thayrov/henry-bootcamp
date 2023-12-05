import React from 'react';
import {useSelector} from 'react-redux';
const InfoEnviada = () => {
  const {formulario} = useSelector(state => {
    return state;
  });
  const [informacion, setInformacion] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const {nombre, email, asunto, mensaje} = informacion;

  React.useEffect(() => {
    setInformacion(formulario);
  }, [formulario]);
  return (
    <div>
      <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
      <h3>{nombre}</h3>
      <h3>{email}</h3>
      <h3>{asunto}</h3>
      <h3>{mensaje}</h3>
    </div>
  );
};

export default InfoEnviada;
