import React from 'react';
import Animals from '../Animals/Animals';
import Species from '../Species/Species';
import styledZoo from './Zoo.module.css';

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then(res => res.json())
      .then(data =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        }),
      )
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, []);

  const handleSpecies = e => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(animal => animal.specie === e.target.value),
    });
  };
  const handleAllSpecies = () => {
    setZoo({...zoo, animals: zoo.allAnimals});
  };

  const handleInputChange = e => setZoo({...zoo, zooName: e.target.value});
  return (
    <div className={`${styledZoo.divContent} ${styledZoo.divContentTitle}`}>
      <label>Zoo Name:</label>
      <input type='text' value={zoo.zooName} onChange={handleInputChange} />
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      <Animals animals={zoo?.animals} />
    </div>
  );
}
