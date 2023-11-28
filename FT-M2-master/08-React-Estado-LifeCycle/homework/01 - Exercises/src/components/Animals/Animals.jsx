import React from 'react';
import styledAnimals from './Animals.module.css';

export default class Animals extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styledAnimals.container}>
        {this.props.animals.map((animal, index) => (
          <div key={index} className={styledAnimals.containerAnimals}>
            <h5>{animal.name}</h5>
            <img width='300px' src={animal.image} alt={animal.name} />
            <br />

            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
