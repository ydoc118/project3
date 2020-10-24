// import React from 'react';
import "./home.css";


// import React from 'react';
// import "./home.css";
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
//     <div className='head'>
//       <h1>Veteran Discount App</h1>
//       <h3>something about the app</h3>
//       <button>Register</button><button>log in</button>
    
//     </div>
//   );
// }

// export default Home;
