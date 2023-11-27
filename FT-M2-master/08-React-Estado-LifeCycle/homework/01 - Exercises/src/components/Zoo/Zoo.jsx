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

  const handleIputChange = e => setZoo({...zoo, zooName: e.target.value});
  return (
    <div>
      <label>Zoo Name:</label>
      <input type='text' value={zoo.zooName} onChange={handleIputChange} />
      <h1>{zoo.zooName}</h1>
    </div>
  );
}
