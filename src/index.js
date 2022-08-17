import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import ProductsContext from './context/productContext';
import AuthContext from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthContext>
          <ProductsContext>
            <App />
          </ProductsContext>
        </AuthContext>
      </BrowserRouter>
  </React.StrictMode>
);
