import React, {useState} from 'react'
import axios from 'axios';
const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend to register the user
      await axios.post('http://localhost:4000/api/register', formData);

      // Clear the form after successful registration
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      });

      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
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
        <h2 className="text-center">REGISTERATION FORM</h2>
        <form id="loginForm" onSubmit={handleSubmit} >
          <div className='mb-3'>
          <label for="Firstname" className="form-label">First Name</label>
            <input type="text" name="firstname"  className="form-control" id="fname"   onChange={handleChange} required/>
          </div>
          <div className='mb-3'>
          <label for="Lastname" className="form-label">Last Name</label>
            <input type="text" name="lastname" className="form-control" id="lname"   onChange={handleChange} required/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="text" name="email" className="form-control" id="email"  onChange={handleChange} required/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password"   onChange={handleChange} required/>
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

export default Register