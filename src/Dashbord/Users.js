// Users.js
import React, { useEffect, useState } from 'react';
import apiInstance from '../configg/api/apiaxiosconfig';
import Loader from '../Component/Loader';
import UserTable from '../Component/userscomponent/UserTable';
import UserForm from '../Component/userscomponent/UserForm';
import UserHeader from '../Component/userscomponent/UserHeader';

function Users() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' }); // State to hold form data
  const [showPlusIcon, setShowPlusIcon] = useState(true); // State to toggle between + and X icons
  const [formErrors, setFormErrors] = useState({}); // State to store form validation errors

  const getData = () => {
    setLoading(true); // Set loading to true when data is being fetched
    apiInstance
      .get('users')
      .then((res) => {
        setUserList([...res.data]);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Form validation
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone is required";
    if (!formData.website) errors.website = "Website is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Prevent form submission if there are errors
    }

    setLoading(true); // Show loader while saving
    // Simulate API call (no actual API call)
    setTimeout(() => {
      setUserList([...userList, { ...formData, id: userList.length + 1 }]); // Add new user to list
      setLoading(false);
      setShowForm(false); // Close form after save
      setShowPlusIcon(true); // Toggle icon back to "+"
      setFormErrors({}); // Reset errors
    }, 1000); // Simulate API delay
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowPlusIcon(!showPlusIcon); // Toggle between "+" and "X"
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close form when clicking the close icon
    setShowPlusIcon(true); // Toggle the icon back to "+"
  };

  return (
    <div>
      <UserHeader showPlusIcon={showPlusIcon} toggleForm={toggleForm} />

      {/* The background content that will be blurred */}
      <div className={`${showForm ? 'blur-md' : ''} relative`}>
        {/* Table to display user data */}
        {loading ? (
          <Loader />
        ) : (
          <UserTable userList={userList} />
        )}
      </div>

      {/* Form to add new user */}
      {showForm && (
        <UserForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          formErrors={formErrors}
          handleCloseForm={handleCloseForm}
        />
      )}
    </div>
  );
}

export default Users;
