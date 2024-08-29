import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
  );
}

const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '6rem',
      marginBottom: '20px',
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '40px',
    },
    link: {
      fontSize: '1.2rem',
      textDecoration: 'none',
      color: '#007BFF',
      border: '1px solid #007BFF',
      padding: '10px 20px',
      borderRadius: '5px',
    },
  };
  
  export default PageNotFound;