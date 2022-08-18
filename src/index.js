import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import ProductsContext from './context/productContext';
import AuthContext from './context/authContext';
import CartContext from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthContext>
          <CartContext>
            <ProductsContext>
              <App />
            </ProductsContext>
          </CartContext>
        </AuthContext>
      </BrowserRouter>
  </React.StrictMode>
);
