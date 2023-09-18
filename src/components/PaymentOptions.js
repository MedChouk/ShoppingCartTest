// PaymentOptions.js
import React, { useState } from 'react';

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div>
            <section>
        <div class="containerone py-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-lg-10 col-xl-8">
              <div class="card">
                <div class="card-body p-md-5">
                  <div>
                    <h4>Upgrade your plan</h4>
                    <p class="text-muted pb-2">
                      Please make the payment to start enjoying all the features of our premium
                      plan as soon as possible
                    </p>
                  </div>

                  <div class="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      <img src="https://i.imgur.com/S17BrTx.webp" class="rounded" width="60" />
                      <div class="d-flex flex-column ms-4">
                        <span class="h5 mb-1">Small Business</span>
                        <span class="small text-muted">CHANGE PLAN</span>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                      <sup class="dollar font-weight-bold text-muted">$</sup>
                      <span class="h2 mx-1 mb-0">8,350</span>
                      <span class="text-muted font-weight-bold mt-2">/ year</span>
                    </div>
                  </div>

                  <h4 class="mt-5">Payment details</h4>

                  <div class="mt-4 d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center">
                      <img src="https://i.imgur.com/qHX7vY1.webp" class="rounded" width="70" alt="description of image"/>
                      <div class="d-flex flex-column ms-3">
                        <span class="h5 mb-1">Credit Card</span>
                        <span class="small text-muted">1234 XXXX XXXX 2570</span>
                      </div>
                    </div>
                    <div>
                      <input type="text" class="form-control" placeholder="CVC"  />
                    </div>
                  </div>

                  <div class="mt-2 d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center">
                      <img src="https://i.imgur.com/qHX7vY1.webp" class="rounded" width="70" />
                      <div class="d-flex flex-column ms-3">
                        <span class="h5 mb-1">Credit Card</span>
                        <span class="small text-muted">2344 XXXX XXXX 8880</span>
                      </div>
                    </div>
                    <div>
                      <input type="text" class="form-control" placeholder="CVC"  />
                    </div>
                  </div>

                  <h6 class="mt-4 mb-3 text-primary text-uppercase">ADD PAYMENT METHOD</h6>

                  <div class="form-outline">
                    <input type="text" id="formControlLg" class="form-control form-control-lg" />
                    <label class="form-label" for="formControlLg">Email address</label>
                  </div>
                  <div class="pt-3">
                    <div class="d-flex flex-row pb-3">
                      <div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                      >
                        <div class="d-flex align-items-center pe-3">
                          <input class="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel11"
                            value="" aria-label="..." checked={paymentMethod === 'cash'}
                            onChange={() => handlePaymentChange('cash')} />
                        </div>
                        <div class="d-flex flex-column">
                          <p class="mb-1 small text-primary">Total amount due</p>
                          <h6 class="mb-0 text-primary">$8245</h6>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex flex-row pb-3">
                      <div class="rounded border d-flex w-100 px-3 py-2 align-items-center">
                        <div class="d-flex align-items-center pe-3">
                          <input class="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel22"
                            value="" aria-label="..." />
                        </div>
                        <div class="d-flex flex-column py-1">
                          <p class="mb-1 small text-primary">Other amount</p>
                          <div class="d-flex flex-row align-items-center">
                            <h6 class="mb-0 text-primary pe-1">$</h6>
                            <input type="text" class="form-control form-control-sm" id="numberExample"
                              checked={paymentMethod === 'online'}
                              onChange={() => handlePaymentChange('online')} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-3">
                    <button class="btn btn-primary btn-block btn-lg">
                      Proceed to payment <i class="fas fa-long-arrow-alt-right"></i>
                    </button>
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

export default PaymentOptions;
