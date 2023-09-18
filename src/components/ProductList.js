// src/components/ProductList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  
  // eslint-disable-next-line
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
    <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Product List</h1>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>${product.price} </td>
            <td><button className="btn btn-primary" type='button' onClick={() => handleAddToCart(product)}>
                  Add to Cart
              </button>
            </td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ProductList;

