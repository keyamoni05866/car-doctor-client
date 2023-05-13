import React from 'react';
import img from '../../assets/images/login/login.svg'
const Login = () => {
 const handleLogin = event =>{
    event.preventDefault()
 }


    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-9">
            <img src={img} alt="" />
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-5">
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
             
                <input type="submit" value="Sign In"  className=" py-3 px-5 rounded-lg text-white bg-[#FF3811]"  />
              </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;