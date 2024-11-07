// pages/Todo.js
import React, { useEffect, useState } from 'react';
import apiInstance from '../configg/api/apiaxiosconfig';
import Loader from '../Component/Loader';
import SearchBar from '../Component/todocomponent/SearchBar';
import TodoList from '../Component/todocomponent/TodoList';
function Todo() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [originalList, setOriginalList] = useState([]);

  const getData = () => {
    setLoading(true);
    apiInstance
      .get("todos")
      .then((res) => {
        setUserList(res.data);
        setOriginalList(res.data); // Save the original list
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredList = userList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setUserList(originalList); // Reset the list to the original data
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md z-20">
        <h1 className="text-2xl font-bold text-gray-800">Todos</h1>
        <SearchBar 
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          clearSearch={clearSearch}
        />
      </div>

      {/* Display loader or filtered todo list */}
      {loading ? (
        <Loader />
      ) : (
        <TodoList filteredList={filteredList} />
      )}
    </div>
  );
}

export default Todo;
