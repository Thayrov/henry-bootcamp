import React from 'react';
import {connect} from 'react-redux';
import './card.css';
import {deleteProduct} from '../../redux/actions/actions';

export class Card extends React.Component {
  handleDelete = () => {
    this.props.deleteProduct(this.props.id);
  };
  render() {
    const {name, price} = this.props;
    return (
      <div className='cardBg'>
        <h5>{name}: </h5>
        <h5>${price}</h5>
        <button className='cardBtn' onClick={this.handleDelete}>
          X
        </button>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: id => dispatch(deleteProduct(id)),
  };
}

export default connect(null, mapDispatchToProps)(Card);
