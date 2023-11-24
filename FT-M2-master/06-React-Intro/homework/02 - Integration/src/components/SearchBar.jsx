export default function SearchBar({onSearch}) {
  return (
    <div>
      <input type='search' />
      <button onClick={() => onSearch(1)}>Agregar</button>
    </div>
  );
}
