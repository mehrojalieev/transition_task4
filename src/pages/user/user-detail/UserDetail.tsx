import { useState } from "react";
import "./UserDetail.scss";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: 'Mehrojbek',
    middleName: '',
    birthDate: '',
    gender: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (gender: any) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="user__detail-box">
      <h2 className="user__detail-title">My Information</h2>
      <form className="user-info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-field">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-field">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              placeholder="Middle Name"
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-field">
            <label>Date of Birth</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Gender</label>
            <div className="gender-buttons">
              <button
                type="button"
                className={formData.gender === 'Male' ? 'active' : ''}
                onClick={() => handleGenderChange('Male')}
              >
                Male
              </button>
              <button
                type="button"
                className={formData.gender === 'Female' ? 'active' : ''}
                onClick={() => handleGenderChange('Female')}
              >
                Female
              </button>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="form-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+998 97 848-80-06"
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="button" className="logout-button">
            Log Out
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetail;
