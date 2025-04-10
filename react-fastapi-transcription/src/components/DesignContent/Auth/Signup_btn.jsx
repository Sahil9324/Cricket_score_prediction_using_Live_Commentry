import React from "react";

const Signup = () => {
  return (
    <div style={styles.authContainer}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Sign Up</h2>
        <p style={styles.description}>Create an account to access cricket updates and predictions.</p>
        <form>
          <input type="text" placeholder="Full Name" style={styles.input} required />
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <input type="password" placeholder="Confirm Password" style={styles.input} required />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.footer}>
          Already have an account? <a href="/login" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

// Inline Styles (Same as Login)
const styles = {
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    width: "1530px",
    // background: "linear-gradient(to right, #0073ff, #00c6ff)",
  },
  authBox: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "350px",
  },
  heading: {
    color: "#0073ff",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#0073ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  footer: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#0073ff",
    textDecoration: "none",
  },
};

export default Signup;
