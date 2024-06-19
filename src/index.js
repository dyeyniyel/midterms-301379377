// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AddProduct from './component/AddProduct/AddProduct';
import SignUpUser from './component/SignUpUser/SignUpUser';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div style={{ marginBottom: '50px' }}>
      <AddProduct />
    </div>
    <div>
      <SignUpUser />
    </div>
  </React.StrictMode>
);