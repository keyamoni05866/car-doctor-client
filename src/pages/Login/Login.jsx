import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
 const handleLogin = event =>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  signIn(email, password)
  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
   navigate(from, {replace: true})
  })
  .catch(error => console.error(error))
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
          <p className='my-4 text-center'>New to Car Doctors <Link to="/signUp" className='text-orange-600 font-bold'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;