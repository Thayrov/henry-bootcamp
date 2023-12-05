import React, {useState} from 'react';
import {connect} from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import {addProduct} from '../../redux/actions/actions';

class Form extends React.Component {
  state = {
    name: '',
    price: '',
    id: '',
  };

  handleInputChange = event => {
    let {name, value} = event.target;
    this.setState({...this.state, [name]: value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const {name, price} = this.state;
    const {list, addProduct} = this.props;

    if (!name || !price) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (list.some(product => product.name === name)) {
      alert('Ya existe un producto con ese nombre.');
      return;
    }

    addProduct({
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
    const {name, price} = this.state;

    return (
      <form className='formBg' onSubmit={this.handleSubmit}>
        <div className='inputBox'>
          <label>Nombre: </label>
          <input name='name' onChange={this.handleInputChange} value={name} />
        </div>
        <div className='inputBox'>
          <label>Precio:</label>
          <input type='number' name='price' onChange={this.handleInputChange} value={price} />
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

export function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
