// import React from "react";
// import { Link } from "react-router-dom";
// import Prediction from './Prediction.jsx'
// import { useState } from "react";


// const Navbar = () => {
//     const [showPrediction, setShowPrediction] = useState(false);
//     return (
//         <>
//           <style>
//             {`
// .page-container {
//   font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
//   background-color: #FFFFFF;
  
//   display: flex;
//   flex-direction: column;
// }

// /* Header */
// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 40px;
//   border-bottom: 1px solid #F4F4F4;
// }

// .header-left {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .logo svg {
//   width: 30px;
//   height: 30px;
//   color: #141414;
// }

// .nav-links {
//   display: flex;
//   gap: 20px;
// }

// .nav-links a {
//   color: #141414;
//   font-size: 14px;
//   font-weight: 500;
//   text-decoration: none;
// }

// .header-right {
//   display: flex;
//   align-items: center;
//   gap: 15px;
// }

// .search-input {
//   background: #F4F4F4;
//   border: none;
//   padding: 8px 12px;
//   border-radius: 8px;
//   font-size: 14px;
// }

// .icon-btn {
//   background: #F4F4F4;
//   border: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: pointer;
// }

// .profile-pic {
//   width: 40px;
//   height: 40px;
//   background-image: url("https://cdn.usegalileo.ai/sdxl10/014920d7-e0b4-4ffa-823a-811dd0d3cdbc.png");
//   background-size: cover;
//   border-radius: 50%;
// }               
//             `}
//           </style>
//           <div className="page-container">
//             <header className="header">
//               <div className="header-left">
//                 <div className="logo">
//                   <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
//                   </svg>
//                 </div>
//                 <h2>Cricket Prodigy</h2>
//               </div>
//               <nav className="nav-links">
//                 <a href="#">Home</a>
//                 <a href="#" onClick={() => setShowPrediction(true)}>Prediction</a>{showPrediction && <Prediction />}
                  
//                 <a href="#">Home</a>
//                 <a href="#">Home</a>
//               </nav>
//               <div className="header-right">
//                 <input className="search-input" type="text" placeholder="Search" />
//                 <button className="icon-btn">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
//                     <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
//                   </svg>
//                 </button>
//                 <div className="profile-pic"></div>
//               </div>
//             </header>
//           </div>
//         </>
//     );
// };

// export default Navbar;












import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <style>
            {`
.page-container {
  font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  border-bottom: 1px solid #F4F4F4;
  height: 30px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo svg {
  width: 30px;
  height: 30px;
  color: #141414;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #141414;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-input {
  background: #F4F4F4;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
}

.icon-btn {
  background: #F4F4F4;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.profile-pic {
  width: 40px;
  height: 40px;
  background-image: url("https://cdn.usegalileo.ai/sdxl10/014920d7-e0b4-4ffa-823a-811dd0d3cdbc.png");
  background-size: cover;
  border-radius: 50%;
}               
            `}
          </style>
          <div className="page-container">
            <header className="header">
              <div className="header-left">
                <div className="logo">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2>Sportezz</h2>
              </div>
              <nav className="nav-links">
                <Link to="/">HomePage</Link>
                <Link to="/prediction">Matchess</Link>
                <Link to="/prediction">Leadeboard</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
              </nav>
              <div className="header-right">
                <input className="search-input" type="text" placeholder="Search" />
                <button className="icon-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
                <div className="profile-pic"></div>

                <nav className="nav-links">
                  <Link to="/login">Login</Link>
                  <Link to="/signup">SignUp</Link>                  
                </nav>
              </div>
            </header>
          </div>
        </>
    );
};

export default Navbar;
