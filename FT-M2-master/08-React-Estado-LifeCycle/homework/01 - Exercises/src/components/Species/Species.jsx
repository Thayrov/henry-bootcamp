import React from 'react';
// import styledSpecies from "./Species.module.css";

export default function Species({species, handleSpecies, handleAllSpecies}) {
  // console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {species.map((specie, i) => {
        return (
          <button key={i} onClick={handleSpecies} value={specie}>
            {' '}
            {specie}
          </button>
        );
      })}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  );
}
