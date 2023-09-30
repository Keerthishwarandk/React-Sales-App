import React from 'react'

const Login = () => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <h2 className="text-center">LOGIN FORM</h2>
        <form id="loginForm">
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"  required/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"  required/>
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

export default Login