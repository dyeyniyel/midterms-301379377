/*
File name: src/component/AddProduct/AddProduct.js
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 06/18/2024
*/

import React, { useState } from 'react';
import './AddProduct.css';

//define AddProduct component
const AddProduct = () => {

    //initialize state for the product with useState, stored in one single object
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    //function to handle changes in the inputs
    const handleChange = (e) => {
        setProduct({ //update the state with new value of the changed input
            ...product,
            [e.target.name]: e.target.value
        });
    };


    //function to handle submit button, display alert with the form details, and log it to the console
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(product, null, 2));
        console.log(product);
    };

    //function for cancel button
    const handleCancel = (e) => {
        e.preventDefault();
        setProduct({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });
    };

    //return form
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Category"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">SUBMIT</button>
                    <button onClick={handleCancel} className="cancel-button">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
