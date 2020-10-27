import "./home.css";  
import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
  


  return (
    <div className="container">
      <div className="card">
        <h1>Veteran Discount App</h1>
        <h3>Helping Veterans find the discounts they deserve</h3>

        <div style={{display: "flex"}}>
          <Link to="/login" className="btn btn-block btn-dark">Login</Link>
          <Link to="/register" className="btn btn-dark">Register</Link>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;


// const Home = ({ title, icon }) => {
//   const authContext = useContext(AuthContext);
//   const [userName, setUserName] = useState();
  

//   const { user, loadUser } = authContext;

//   useEffect(() => {
//     loadUser();
//     if(user){
//       setUserName(user.name)
//     }
//     // eslint-disable-next-line
//   },[user]);

//   return (
//     <div className='container'>
//       <div className="card">
//         <h1>Veteran Discount App</h1>
//         <h3>Welcome, {userName}!</h3>
//       </div>
//     </div>
//   );
// };

// export default Home;



























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
