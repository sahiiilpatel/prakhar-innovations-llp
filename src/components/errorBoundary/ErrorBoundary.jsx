// src/components/ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={styles.container}>
          <h1 style={styles.heading}>Something went wrong.</h1>
          <p style={styles.message}>We are working on fixing the issue. Please try again later.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
};

export default ErrorBoundary;
