import React from 'react';
import "./home.css";
// import Footer from '../components/Footer'

    


function Home(props) {
  return (

    
    
<div class="login-img3-body">

{/* <div className="background" 
    style={{background: `url(${Background})`}}
    >...</div> */}

{/* <div className='head'></div> */}
 {/* <div class="container"></div> */}

 {/* <form class="login-form" action="index.html">  </form> */}
    {/* <div class="login-wrap"></div> */}
    
       <p class="login-img"><i class="icon_lock_alt"></i></p>
      <div class="input-group"></div>
       <span class="input-group-addon"><i class="icon_profile"></i></span> 
        
       
      <div class="input-group"></div>
        {/* <span class="input-group-addon"><i class="icon_key_alt"></i></span> */}
        <input type="text" class="form-control" placeholder="Username" autofocus></input>

        <input type="password" class="form-control" placeholder="Password"></input>
        

      <label class="checkbox">
              <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
              </label>
      <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
      <button class="btn btn-info btn-lg btn-block" type="submit">Signup</button>
     
      
      
      </div>
     
      

   
  );
}

export default Home;
