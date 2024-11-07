import React from 'react'
import Users from '../Dashbord/Users'
import { Link, Route, Routes } from 'react-router-dom'
import Coments from '../Dashbord/Coments'
import Posts from '../Dashbord/Posts'
import Photos from '../Dashbord/Photos'
import Todo from '../Dashbord/Todo'

function Home() {
  return (
    <div className='w-[100%] h-screen flex'>
      <div className='p-2 bg-black-400 w-[25%] fixed h-screen bg-gray-800'>
        <div className='w-[100%] p-8 rounded-xl bg-cyan-700 flex justify-center text-2xl'>
          Dashboard
        </div>
        
        {/* Sidebar Links */}
        <Link to='/users' className='w-[100%] hover:border text-[gray] mt-[20px] hover:text-gray-300 p-2 text-[20px] rounded-xl block'>
          <div className='flex items-center'>
            <i className='ml-[40px] text-2xl p-2 fa-solid fa-user'></i>
            <span className='ml-[20px] text-1xl'>Users</span>
          </div>
        </Link>

        <Link to='/comments' className='w-[100%] hover:border text-[gray] mt-[20px] hover:text-gray-300 p-2 text-[20px] rounded-xl block'>
          <div className='flex items-center'>
            <i className='ml-[40px] text-2xl p-2 fa-solid fa-comments'></i>
            <span className='ml-[20px] text-1xl'>Comments</span>
          </div>
        </Link>

        <Link to='/posts' className='w-[100%] hover:border text-[gray] mt-[20px] hover:text-gray-300 p-2 text-[20px] rounded-xl block'>
          <div className='flex items-center'>
            <i className='ml-[40px] text-2xl p-2 fa-solid fa-signs-post'></i>
            <span className='ml-[20px] text-1xl'>Posts</span>
          </div>
        </Link>

        <Link to='/photos' className='w-[100%] hover:border text-[gray] mt-[20px] hover:text-gray-300 p-2 text-[20px] rounded-xl block'>
          <div className='flex items-center'>
            <i className='ml-[40px] text-2xl p-2 fa-solid fa-image'></i>
            <span className='ml-[20px] text-1xl'>Photos</span>
          </div>
        </Link>

        <Link to='/todos' className='w-[100%] hover:border text-[gray] mt-[20px] hover:text-gray-300 p-2 text-[20px] rounded-xl block'>
          <div className='flex items-center'>
            <i className='ml-[40px] text-2xl p-2 fa-solid fa-list'></i>
            <span className='ml-[20px] text-1xl'>Todos</span>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className='w-[75%]  text-[white] text-[xl] h-screen  ml-[25%]'>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/comments' element={<Coments />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/todos' element={<Todo />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
