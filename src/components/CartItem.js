// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeFromCart } from '../redux/actions';


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch(updateCartItemQuantity(item.id, newQuantity));
  };

  const handleRemoveClick = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
      <div>
      <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <div class="card text-black">
                <i class="pb-1 px-3"></i>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                  class="card-img-top" alt="Apple Computer" />
              </div>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">Basic Product</p>
              <p><span class="text-muted">Id: </span>{item.id} <span class="text-muted">Name: </span>{item.name}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fa fa-minus"></i>
              </button>

              <input id="form1" min="1" name="quantity" type="number" placeholder='0'
                class="form-control form-control-sm" value={item.quantity}
                onChange={handleQuantityChange}/>

              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fa fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">$ {item.price}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <button type="button" class="btn text-danger" onClick={handleRemoveClick}><i class="fa fa-trash" aria-hidden="true"></i></button>
              
            </div>
          </div>
        </div>
      </div>
      </div>

    
  );
};

export default CartItem;
