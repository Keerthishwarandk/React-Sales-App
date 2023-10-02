import React, {useState} from 'react'
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend to log in the user
      const response = await axios.post('http://localhost:4000/api/login', formData);

      // Update userEmail state with the user's email on successful login
      setUserEmail(response.data.email);
      
      // Clear the form after successful login
      setFormData({
        email: '',
        password: '',
      });

      setErrorMessage('');
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Invalid email or password. Please try again.');
      setUserEmail('');
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
        <h2 className="text-center">LOGIN FORM</h2>
        {userEmail ? (
        <div>
          <p>Welcome, {userEmail}!</p>
          {/* Display user info here */}
        </div>
      ) : (
        <form id="loginForm" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email"   name="email" className="form-control" id="email" onChange={handleChange}  required/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password"   name="password" className="form-control" id="password" onChange={handleChange}  required/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
      </div>
    </div>
  </div>
  )
}

export default Login