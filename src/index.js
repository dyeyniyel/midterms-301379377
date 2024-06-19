/*
File name: src/index.js
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 06/18/2024
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import AddProduct from './component/AddProduct/AddProduct';
import SignUpUser from './component/SignUpUser/SignUpUser';

const root = createRoot(document.getElementById('root'));


//render react application with the Add Product and SignUpUser component
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