// UserForm.js
import React from 'react';

const UserForm = ({ formData, handleInputChange, handleSave, formErrors, handleCloseForm }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
        {/* Close button inside the form */}
        <button
          className="absolute top-2 right-2 text-xl text-red-500"
          onClick={handleCloseForm}
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <h2 className="text-xl mb-4">Add New User</h2>
        <form>
          <div className="mb-2">
            <label className="block">Name:</label>
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 w-full"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>
          <div className="mb-2">
            <label className="block">Email:</label>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 w-full"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div className="mb-2">
            <label className="block">Phone:</label>
            <input
              type="text"
              name="phone"
              placeholder='Phone'
              value={formData.phone}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 w-full"
            />
            {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block">Website:</label>
            <input
              type="text"
              placeholder='Webside'
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 w-full"
            />
            {formErrors.website && <p className="text-red-500 text-sm">{formErrors.website}</p>}
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
