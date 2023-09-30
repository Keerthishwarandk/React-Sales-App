import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Top5sales = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch sales data from your backend
    axios.get('http://localhost:4000/api/sales') // Update the URL as needed
      .then((response) => {
        // Update the state with the fetched sales data
        setSalesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="text-center">TOP 5 SALES</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sales Ids:</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sale Amount</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr key={sale._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{sale.product_id}</td>
                  <td>{sale.product_name}</td>
                  <td>{sale.quantity}</td>
                  <td>{sale.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Top5sales;
