// UserTable.js
import React from 'react';

const UserTable = ({ userList }) => {
  return (
    <div>
      {userList.length > 0 ? (
        <table className="mt-2 w-full h-screen">
          <thead>
            <tr className="bg-gray-600">
              <th className="p-2 border-2">No</th>
              <th className="border-2">Name</th>
              <th className="border-2">Email</th>
              <th className="border-2">Phone</th>
              <th className="border-2">Website</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr className="border-2 text-black" key={user.id}>
                <td className="flex justify-center mt-6">{user.id}</td>
                <td className="p-2 border-2">{user.name}</td>
                <td className="p-2 border-2">{user.email}</td>
                <td className="p-2 border-2">{user.phone}</td>
                <td className="p-2 border-2">{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Users Available</p>
      )}
    </div>
  );
};

export default UserTable;
