// components/TodoList.js
import React from 'react';

const TodoList = ({ filteredList }) => {
  return (
    <div>
      {filteredList.length > 0 ? (
        <table className="mt-2 w-full h-screen">
          <thead>
            <tr className="bg-[gray]">
              <th className="p-2 border-2">No</th>
              <th className="border-2">Title</th>
              <th className="border-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((Coment, index) => (
              <tr
                className={`border-2 text-xl text-black ${
                  Coment.completed ? 'bg-green-400' : 'bg-red-400'
                }`}
                key={Coment.id}
              >
                <td className="flex justify-center mt-6">{index + 1}</td>
                <td className="p-2 border-2">{Coment.title}</td>
                <td className="p-2 border-2">
                  {Coment.completed ? (
                    <i className="fa-solid fa-check text-white"></i>
                  ) : (
                    <i className="fa-solid fa-x text-white"></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Todo Items Available</p>
      )}
    </div>
  );
};

export default TodoList;
