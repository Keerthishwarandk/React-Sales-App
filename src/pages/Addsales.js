import React, { useState } from 'react';
import axios from 'axios';

const Addsales = () => {

  const [formData, setFormData] = useState({
    product_id: '',
    product_name: '',
    quantity: '',
    amount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/api/products', formData);
      alert('Product added successfully');
      setFormData({
        product_id: '',
        product_name: '',
        quantity: '',
        amount: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
    <div className="container-fluid">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <h2 className="text-center">ADD SALE ENTRY</h2>
        <form id="salesentry"  onSubmit={handleSubmit} >
        <div className="mb-3">
            <label  className="form-label">Product id</label>
            <input type="text"  name="product_id"  onChange={handleChange} className="form-control"   required/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Product Name</label>
            <input type="text" name="product_name" onChange={handleChange} className="form-control"   required/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Quantity</label>
            <input type="number" name="quantity"  onChange={handleChange} className="form-control"   required/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Amount</label>
            <input type="number"  name="amount"  onChange={handleChange} className="form-control"   required/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Addsales