// UserHeader.js
import React from 'react';

const UserHeader = ({ showPlusIcon, toggleForm }) => {
  return (
    <div className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md z-20">
      <h1 className="text-4xl font-bold text-gray-800">Users</h1>
      <i
        className={`fa-solid ${showPlusIcon ? 'fa-plus' : 'fa-times'} mr-[10px] cursor-pointer text-white border-2  w-[4%] flex justify-center items-center h-[50px] rounded-[50%]  border-[white] text-3xl`}
        onClick={toggleForm} // Toggle form visibility on click
      />
    </div>
  );
};

export default UserHeader;
