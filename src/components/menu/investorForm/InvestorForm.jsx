
import React, { useState } from 'react';
import './InvestorForm.css'

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    investorType: 'individual', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, you could send formData to a server or perform other actions
  };

  return (
    <div className="form-container">
      <h2>Investor Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="investmentAmount">Investment Amount (IND):</label>
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            min="100000"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="investorType">Investor Type:</label>
          <select
            id="investorType"
            name="investorType"
            value={formData.investorType}
            onChange={handleChange}
            required
          >
            <option value="individual">Individual</option>
            <option value="institutional">Institutional</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InvestorForm;
