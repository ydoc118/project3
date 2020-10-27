import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';
import API from '../utils/API';
import './Home.js'

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const [userData, setUserData] = useState([]);
  const [registerButton, setregisterButton] = useState("none")
  const [veteranStatus, setVeteranStatus] = useState()

  useEffect(() => {
    loadUsers();

    console.log(veteranStatus)

    if (isAuthenticated) {
      props.history.push('/categories');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    ssnumber: '',
    password: '',
    password2: ''
  });

  const { firstName, lastName, email, ssnumber, password, password2 } = user;

  const onChange = e => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  } 

  const loadUsers = () => {
    API.getUsers()
      .then(res => {
        for(var i = 0; i <res.data.length; i++) {
          setUserData(res.data[i])
        }
      })
  }

  

  const onVerify = (e) => {
    e.preventDefault()

      API.getOneUser(firstName, lastName, ssnumber)
      .then(res => {
        console.log(res.data)
        if(res.data[0] === undefined) {
          setVeteranStatus(false)
        }else {
          setVeteranStatus(res.data[0].veteranStatus)
          
        }
        
    })
  }

  useEffect(() => {
    console.log(veteranStatus)
    if(veteranStatus === true){
      setAlert("Veteran Status Verifed", "success")
      setregisterButton("block")
    }else if (veteranStatus === false) {
      setAlert("NOT A VETERAN", "danger")
      setregisterButton("none")
      
    } 
  }, [veteranStatus])

  const onSubmit = (e) => {
      e.preventDefault();

    if (firstName === '' || lastName === '' || email === '' || ssnumber === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else if(veteranStatus === false) {
      setAlert("NOT A VETERAN", "danger")
    }
    else {
      register({
        firstName,
        lastName,
        email,
        ssnumber,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account Register<span className='text-primary'></span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>First Name</label>
          <input
            id='firstName'
            type='text'
            name='firstName'
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Last Name</label>
          <input
            id='lastName'
            type='text'
            name='lastName'
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='ssnumber'>Social Security Number</label>
          <input
            id='ssnumber'
            type='password'
            name='ssnumber'
            value={ssnumber}
            onChange={onChange}
            required
            length='9'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          style={{display: registerButton}}
          type='submit'
          value='Register'
          className='btn btn-block btn-dark'
        />
      </form>
      <input
          type='button'
          onClick={onVerify}
          value='Verify'
          className='btn btn-block btn-dark'
        />
    </div>
  );
};

export default Register;
