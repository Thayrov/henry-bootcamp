import {useRef} from 'react';
import characters from '../data.js';

export default function SearchBar({onSearch}) {
  const inputRef = useRef();

  const handleSearch = () => {
    let res = characters.filter(
      char => char.name.toLowerCase() === inputRef.current.value.toLowerCase(),
    );
    return res.length > 0 ? onSearch(res[0].name) : onSearch('Personaje no encontrado');
  };

  return (
    <div>
      <input ref={inputRef} type='search' />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
