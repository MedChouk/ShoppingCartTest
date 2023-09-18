import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import CartView from './components/CartView';
import ProductList from './components/ProductList';
import PaymentOptions from './components/PaymentOptions';
import UserInformationForm from './components/UserInformationForm';
// import { fetchProducts } from './redux/apiService'; 

import './App.css';

const store = createStore(rootReducer);

function App() {
  
/* 

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []); */

  const products = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 49.99,
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99,
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 39.99,
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 59.99,
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 34.99,
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 49.99,
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 79.99,
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 24.99,
  },
  {
    "id": 9,
    "name": "Product 9",
    "price": 69.99,
  },
  {
    "id": 10,
    "name": "Product 10",
    "price": 44.99,
  }
]
; 


  return (
    <div className="App">
{/*     <div>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.userId}>{product.id} / {product.title}</li>
          ))}
        </ul>
      )}
    </div><br></br> */}
      <Provider store={store}>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="navbar-brand">Shopping Cart app </p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <p class="nav-link">Home <span class="sr-only">(current)</span></p>
            </li>
            <li class="nav-item">
              <p class="nav-link">Products</p>
            </li>
          </ul>
        </div>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </nav>
        {console.log(products)}
        <ProductList products={products} /><hr/>
        <CartView /><hr/>
        <PaymentOptions /><hr/>
        <UserInformationForm /><hr/>
      </div>
      </Provider>
    </div>
  );
}

export default App;
