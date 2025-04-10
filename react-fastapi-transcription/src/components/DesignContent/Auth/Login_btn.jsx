// import React from "react";

// const Login = () => {
//   return (
//     <div style={styles.authContainer}>
//       <div style={styles.authBox}>
//         <h2 style={styles.heading}>Login</h2>
//         <p style={styles.description}>Welcome back! Please log in to continue.</p>
//         <form>
//           <input type="email" placeholder="Email" style={styles.input} required />
//           <input type="password" placeholder="Password" style={styles.input} required />
//           <button type="submit" style={styles.button}>Login</button>
//         </form>
//         <p style={styles.footer}>
//           Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   authContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "90vh",
//     width: "1530px",
//     // background: "linear-gradient(to right, #0073ff, #00c6ff)",
//   },
//   authBox: {
//     background: "white",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
//     textAlign: "center",
//     width: "350px",
//   },
//   heading: {
//     color: "#0073ff",
//     marginBottom: "10px",
//   },
//   description: {
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "8px 0",
//     border: "1px solid #ddd",
//     borderRadius: "6px",
//     fontSize: "16px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     background: "#0073ff",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   footer: {
//     marginTop: "15px",
//     fontSize: "14px",
//   },
//   link: {
//     color: "#0073ff",
//     textDecoration: "none",
//   },
// };

// export default Login;



import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUserType }) {
  const navigate = useNavigate();

  const handleLogin = (role) => (event) => {
    event.preventDefault();
    // Perform authentication logic here
    setUserType(role);
    navigate('/'); // Redirect to home or dashboard
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.description}>Welcome back! Please log in to continue.</p>
        <form>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.button} onClick={handleLogin('admin')}>
            Login as Admin
          </button>
          <button type="submit" style={styles.button} onClick={handleLogin('user')}>
            Login as User
          </button>
        </form>
        <p style={styles.footer}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  authContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100vw',
    // background: 'linear-gradient(to right, #0073ff, #00c6ff)',
  },
  authBox: {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '350px',
  },
  heading: {
    color: '#0073ff',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#0073ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: {
    marginTop: '15px',
    fontSize: '14px',
  },
  link: {
    color: '#0073ff',
    textDecoration: 'none',
  },
};

export default Login;
