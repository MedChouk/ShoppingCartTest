// CartView.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyCoupon } from '../redux/actions';
import CartItem from './CartItem';

const CartView = () => {
  const cart = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon);
  const dispatch = useDispatch();

  const handleApplyCoupon = (event) => {
    const couponCode = event.target.value;
    dispatch(applyCoupon(couponCode));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = coupon ? calculateDiscount(subtotal, coupon) : 0;
    return subtotal - discount;
  };

  const calculateDiscount = (subtotal, coupon) => {
    // Implement your coupon logic here
    // Return the discount amount
    return 0;
  };

  return (
    <div className="">
      <section class="h-100">
        <div class="containerone h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0"><span class="text-muted">Sort by:</span> price <i
                    class="fa fa-angle-down mt-1"></i></p>
                </div>
              </div>

              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <input type="text" id="form1" class="form-control form-control-lg" placeholder='Discound code' onChange={handleApplyCoupon}/>
                  </div>
                </div>
              </div>
              

              <div class="card mb-5">
                <div class="card-body p-4">

                  <div class="float-end">
                    <p class="mb-0 me-5 d-flex align-items-center">
                      <span class="text-muted me-2">Order total price :</span> <h5 class="mb-0">$ {calculateTotal()}</h5>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartView;
