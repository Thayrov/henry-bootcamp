import React, {useState} from 'react';
import {connect} from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import {addProduct} from '../../redux/actions/actions';

class Form extends React.Component {
  constructor({addProduct}) {
    super({addProduct});

    this.state = {
      name: '',
      price: '',
      id: '',
    };
  }

  handleInputChange = event => {
    let {name, value} = event.target;
    this.setState({...this.state, [name]: value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addProduct({
      ...this.state,
      id: Date.now(),
    });
    this.setState({
      name: '',
      price: '',
      id: '',
    });
  };

  render() {
    return (
      <form className='formBg' onSubmit={this.handleSubmit}>
        <div className='inputBox'>
          <label>Nombre: </label>
          <input name='name' onChange={this.handleInputChange} value={this.state.name} />
        </div>
        <div className='inputBox'>
          <label>Precio:</label>
          <input
            type='number'
            name='price'
            onChange={this.handleInputChange}
            value={this.state.price}
          />
        </div>
        <button className='formBtn'>¡ADD!</button>
        <img src={Caja} alt='' className='logo' />
      </form>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addProduct: product => dispatch(addProduct(product)),
  };
}

export default connect(null, mapDispatchToProps)(Form);
