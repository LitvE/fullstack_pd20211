import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import styles from './ProductsList.module.css';


function ProductsList(props) {
  const { products, isFetching, error, getProducts } = props;

  useEffect(() => {
    getProducts();
  }, []);

  const mapProduct = ({ id, name, description, price, images}) => {
      let imgSrc = '/images/' + images[0];
    return (
      <li key={id}>
        Product: {name}, description: {description}, price: {price} UAH
        <img src={imgSrc} alt='phone'/>
      </li>
    );
  };

  return (
    <>
      {isFetching}
      {error && <div>Error</div>}
      <ul>{products.map(mapProduct)}</ul>
    </>
  );
}

const mapStateToProps = (state) => state.product;

const mapDispatchProps = (dispatch) => ({
    getProducts: () => dispatch(actionCreators.getProductsAction()),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductsList);