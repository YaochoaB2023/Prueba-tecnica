import React from 'react'
import '../styles/NavBar.css'
export const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <div className=' py-2 arriba'>
            <div className="streaming">
                <h1>DEMO Streaming</h1>
            </div>
            <div className="login px-10">
            <button class=" text-white font-bold py-2 px-4 rounded">
                 Log in
            </button>
            </div>
            <div className="start  ">
            <button class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 ">
                start your free trial
            </button>
            </div>
        </div>
        <div className=' py-2 abajo'>
            <div className="titles">
                <h1>Popular Titles</h1>
            </div>
        </div>
    </div>
    </>
  )
}
