// import App from "../App"
import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react"
import { User, Cross } from 'lucide-react';
import { IoCloseCircleOutline } from "react-icons/io5";
const Nav = () => {
    const [visi, setvisi] = useState(false);
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem("admin"));
    const [activeSection, setActiveSection] = useState("Profile");
  
    const handleLogin = (e) => {
      e.preventDefault();
      setvisi(false);
      localStorage.setItem("admin", e.target.username.value);
      setIsLogin(true);
    };
    const handleScroll = (e, id) => {
      e.preventDefault();
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    const handleLogout = () => {
      localStorage.removeItem("admin");
      setIsLogin(false);
      setvisi(false);
      window.location.reload();
    };
  
    const NavLinks = [
      { title: "About", path: "#About" },
      { title: "Skills", path: "#Skills" },
      { title: "Projects", path: "#Projects" },
      { title: "Contact", path: "#Contact" },
    ];
  
    return (
      <>
              <div className='flex justify-center pt-3 sticky pb-3'>
            <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://cdn.pixabay.com/video/2024/05/05/210824_large.mp4"
    autoPlay
    loop
    muted
  ></video>
      <div className=" list-none flex flex-row items-center gap-[3rem] h-[3rem] w-[100vw] rounded-md shadow-md z-10">
     
   
        <div className="flex text-center w-[30%] justify-end">
          <h1 className="text-gray-100 text-2xl">Nivash</h1>
        </div>
            <div className="w-[60%] flex justify-end gap-[2rem]">
              {NavLinks.map((navdata, index) => (
                <a
                  key={index}
                  href={navdata.path}
                  onClick={(e) => {
                    setActiveSection(navdata.title);
                    handleScroll(e, navdata.path.substring(1)); 
                  }}
                  className=" inline-block py-2 px-4 rounded-md text-gray-300 font-bold hover:border-b-2 hover:border-slate-200"
                >
                  {navdata.title}
                </a>
              ))}
              <button onClick={() => setvisi(true)}>
                <User className="text-gray-300" />
              </button>
            </div>
          </div>
        </div>
  
        {/* Login Modal */}
        {visi && (
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
            <div className="h-[60%] w-[25%] bg-white flex flex-col shadow-lg">
              <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-black text-xl font-bold">
                <div className="w-2/3 flex justify-center">Login</div>
                <div className="w-2/3 flex justify-end">
                  <IoCloseCircleOutline onClick={() => setvisi(!visi)} />
                </div>
              </div>
              <div className="w-full h-[85%] flex flex-row justify-center items-center">
                <form
                  className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4"
                  onSubmit={handleLogin}
                >
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="username"
                    required
                    className="p-3 bg-[#e7e8ea] w-full font-bold outline-none focus:border-b-4 hover:border-gray-500 rounded-md"
                  />
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    required
                    className="p-3 bg-[#e7e8ea] w-full font-bold outline-none focus:border-b-4 hover:border-gray-500 rounded-md"
                  />
                  <button
                    type="submit"
                    className="bg-gray-600 p-3 text-black w-full h-[3rem] rounded-sm text-lg font-bold hover:bg-gray-500 shadow-lg"
                  >
                    Login
                  </button>
                </form>
              </div>
              {isLogin && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white p-2 rounded mt-4"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export { Nav };
  