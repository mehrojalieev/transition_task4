import { useState } from "react";
import InputMask from "react-input-mask";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        role: "",
        phoneNumber: "+998",
        password: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (name === "phoneNumber") {
            const cleanedPhoneNumber = value.replace(/\D/g, "");
            setFormData({ ...formData, [name]: cleanedPhoneNumber });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Registration data submitted:", formData);
    };

   

    return (
        <div className="register-form">
            <h2 className="register-form__title">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-groups">
                    <div className="register-form__group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="register-form__group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-groups">
                    <div className="register-form__group">
                        <label htmlFor="birthDate">Birth Date</label>
                        <input type="date" name="birthDate" id="birthDate" value={formData.birthDate} onChange={handleChange} required />
                    </div>

                    <div className="register-form__group">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="form-groups">

                    <div className="register-form__group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <InputMask mask="+998 (99) 999-99-99" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required>
                        </InputMask>
                    </div>

                    <div className="register-form__group">
                        <label htmlFor="role">Role</label>
                        <select name="role" id="role" value={formData.role} onChange={handleChange} required>
                            <option value="">Select Role</option>
                            <option value="sotuvchi">Sotuvchi</option>
                            <option value="foydalanuvchi">Oddiy Foydalanuvchi</option>
                        </select>
                    </div>
                </div>


                <div className="register-form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                </div>


                <div className="register-form__group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit" className="register-form__submit">
                    Register
                </button>
            </form>
            <p className="form__bottom-text">Already have an account? <Link to="/auth/login">Login</Link></p>
        </div>
    );
};

export default Register;
