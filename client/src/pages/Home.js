// import React from 'react';
import "./home.css";
// import Footer from '../components/Footer'

    
import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';



const Home = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='./Register'>Register</Link>
      </li>
      <li>
        <Link to='./login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Home.defaultProps = {
  title: 'VET-DIS',
  icon: 'fas fa-id-card-alt'
};

export default Home;
























// function Home(props) {
//   return (

    
    
// <div class="login-img3-body">

// {/* <div className="background" 
//     style={{background: `url(${Background})`}}
//     >...</div> */}

// {/* <div className='head'></div> */}
//  {/* <div class="container"></div> */}

//  {/* <form class="login-form" action="index.html">  </form> */}
//     {/* <div class="login-wrap"></div> */}
    
//        <p class="login-img"><i class="icon_lock_alt"></i></p>
//       <div class="input-group"></div>
//        <span class="input-group-addon"><i class="icon_profile"></i></span> 
        
       
//       <div class="input-group"></div>
//         {/* <span class="input-group-addon"><i class="icon_key_alt"></i></span> */}
//         <input type="text" class="form-control" placeholder="Username" autofocus></input>

//         <input type="password" class="form-control" placeholder="Password"></input>
        

//       <label class="checkbox">
//               <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
//               </label>
//       <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
//       <button class="btn btn-info btn-lg btn-block" type="submit">Signup</button>
     
      
      
//       </div>
     
      

   
//   );
// }

// export default Home;
