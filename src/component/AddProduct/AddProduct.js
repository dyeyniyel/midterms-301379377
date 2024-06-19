import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(product, null, 2));
        console.log(product);
    };

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
