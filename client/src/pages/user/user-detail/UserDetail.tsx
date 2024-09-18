import { useState } from "react";
import "./UserDetail.scss"
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
      <h2 className="user__detail-title">Ma'lumotlarim</h2>
      <form className="user-info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label>Familiya *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Familiya"
            />
          </div>
          <div className="form-field">
            <label>Ism *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Ism"
            />
          </div>
          <div className="form-field">
            <label>Otasining ismi</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              placeholder="Otasining ismi"
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-field">
            <label>Tug'ilgan sana</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Jins</label>
            <div className="gender-buttons">
              <button
                type="button"
                className={formData.gender === 'Erkak' ? 'active' : ''}
                onClick={() => handleGenderChange('Erkak')}
              >
                Erkak
              </button>
              <button
                type="button"
                className={formData.gender === 'Ayol' ? 'active' : ''}
                onClick={() => handleGenderChange('Ayol')}
              >
                Ayol
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label>Elektron pochta *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Elektron pochta"
            />
          </div>
          <div className="form-field">
            <label>Telefon raqami *</label>
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
            Tizimdan chiqish
          </button>
          <button type="button" className="cancel-button">
            Bekor qilish
          </button>
          <button type="submit" className="save-button">
            Saqlash
          </button>
        </div>
      </form>

      {/* <h4 className="user__detail-title">Ma'lumotlarim</h4> */}
    </div>
  )
}

export default UserDetail
