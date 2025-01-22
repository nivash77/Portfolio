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
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.error(`Element with id "${id}" not found.`);
      }
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
        {/* Header Section */}
        <div className="flex justify-center pt-3 sticky pb-3">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src="https://cdn.pixabay.com/video/2024/05/05/210824_large.mp4"
            autoPlay
            loop
            muted
          ></video>
    
          <div className="list-none flex flex-row items-center gap-4 md:gap-[3rem] h-[3rem] w-full px-4 md:px-10 rounded-md shadow-md z-10 bg-black/50">
            <div className="flex text-center w-1/3 md:w-[30%] justify-start md:justify-start">
              <h1 className="text-gray-100 text-lg md:text-2xl">Nivash</h1>
            </div>
            <div className="w-2/3 md:w-[60%] flex justify-end gap-4 md:gap-[2rem]">
              {NavLinks.map((navdata, index) => (
                <a
                  key={index}
                  href={navdata.path}
                  onClick={(e) => {
                    setActiveSection(navdata.title);
                    handleScroll(e, navdata.path.substring(1));
                  }}
                  className="inline-block py-2 px-3 md:px-4 text-sm md:text-base rounded-md text-gray-300 font-bold hover:border-b-2 hover:border-slate-200"
                >
                  {navdata.title}
                </a>
              ))}
              {/* <button onClick={() => setvisi(true)}>
                <User className="text-gray-300" />
              </button> */}
            </div>
          </div>
        </div>
    
        {/* Login Modal */}
        {visi && (
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
            <div className="w-[90%] md:w-[50%] lg:w-[25%] h-[70%] md:h-[60%] bg-white flex flex-col shadow-lg rounded-lg">
              {/* Modal Header */}
              <div className="w-full h-[15%] flex flex-row justify-between px-4 md:px-10 items-center border-b-2 text-black text-lg md:text-xl font-bold">
                <div className="w-2/3 flex justify-center">Login</div>
                <IoCloseCircleOutline
                  className="text-gray-500 hover:text-black cursor-pointer"
                  onClick={() => setvisi(!visi)}
                />
              </div>
    
              {/* Modal Body */}
              <div className="w-full h-[85%] flex flex-col justify-center items-center p-4">
                <form
                  className="w-full max-w-[80%] flex flex-col justify-center items-center gap-4"
                  onSubmit={handleLogin}
                >
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Username"
                    required
                    className="p-3 bg-[#e7e8ea] w-full font-bold outline-none focus:border-b-4 hover:border-gray-500 rounded-md text-sm md:text-base"
                  />
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    required
                    className="p-3 bg-[#e7e8ea] w-full font-bold outline-none focus:border-b-4 hover:border-gray-500 rounded-md text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="bg-gray-600 p-3 text-white w-full h-[3rem] rounded-md text-sm md:text-lg font-bold hover:bg-gray-500 shadow-lg"
                  >
                    Login
                  </button>
                </form>
              </div>
              {isLogin && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white p-2 rounded mx-4 mt-4 text-sm md:text-base"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </>
    ); 
  }
     export { Nav };
  