// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AddProduct from './component/AddProduct';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AddProduct />
  </React.StrictMode>
);
