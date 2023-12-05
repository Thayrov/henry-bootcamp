import {connect} from 'react-redux';
import React from 'react';
import './products.css';
import Card from '../Card/Card';
import {getStoreName} from '../../redux/actions/actions';

export function Products({list, storeName, getStoreName}) {
  React.useEffect(() => {
    getStoreName();
    // eslint-disable-next-line
  }, []);

  const products = list.map(({id, name, price}) => (
    <Card key={id} name={name} price={price} id={id} />
  ));
  return (
    <>
      <div className='productsBg'>
        <h1 className='productsTl'>{storeName}</h1>
        <div className='productsList'>{products}</div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list,
    storeName: state.storeName,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getStoreName: () => dispatch(getStoreName()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
