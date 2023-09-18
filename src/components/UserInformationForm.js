// UserInformationForm.js
// eslint-disable-next-lin
import React, { useState } from 'react';

const UserInformationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-4 text-center">User Information</h1>
          <form className="d-flex flex-column">
            <label htmlFor="name">
              Full Name:
              <input
                name="name"
                id="name"
                type="text"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="notes">
              Address :
              <input
                name="address"
                id="address"
                type="test"
                className="form-control"
                value={formData.address}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="id">
              Contact :
              <input
                name="contact"
                id="contact"
                type="text"
                className="form-control"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </label>

            <button className="btn btn-info mt-4" type='submit'>
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
