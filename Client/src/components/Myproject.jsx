import { Pencil, Trash, Check } from "lucide-react";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import { deleteProject } from "../services/api";

export const Myproject = ({ title, desc, pid, cover, git, id, link, fetchprojects }) => {
    const [admin_user, setadmin_user] = useState(localStorage.getItem("admin"));
    const [showDetails, setShowDetails] = useState(false); 
    const handledelete = async () => {
        console.log("Project ID:", id); // Check if ID is valid
        if (!id) {
            console.error("Invalid Project ID");
            return;
        }
    
        try {
            const res = await deleteProject(id);
            if (res.status === 200) {
                console.log("Deleted");
                toast("Deleted successfully", {
                    className:
                        "bg-gradient-to-r from-red-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
                    icon: <Check />,
                });
                fetchprojects();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const toggleDetails = () => {
        setShowDetails(!showDetails); 
      };

      return (
        <div
          className="service-card w-full sm:w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md border-gray-300"
          onClick={toggleDetails}
        >
          {/* Cover Image */}
          <img
            src={cover}
            alt={title}
            className="h-[40%] sm:h-[50%] w-full object-cover rounded-md mb-4"
          />
      
          {/* Title */}
          <p className="font-bold text-xl sm:text-2xl text-gray-600">{title}</p>
      
          {/* Modal for Details */}
          {showDetails && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggleDetails}
            >
              <div
                className="relative bg-white p-6 w-[90%] max-w-md rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={toggleDetails}
                >
                  ✕
                </button>
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="font-bold text-lg text-gray-800 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-4">{desc}</p>
                <p className="text-sm text-gray-800">
                  <strong>Designation:</strong> Developer
                </p>
                <a
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          )}
      
          {/* Footer Section */}
          <div className="w-full flex flex-row justify-end items-end gap-2 mt-auto">
            {admin_user === "nivash_07" && (
              <button
                className="flex justify-center items-center gap-2 w-12 sm:w-16 h-8 sm:h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-sm hover:shadow-red-100 hover:from-[#be123c] hover:to-[#fb7185]"
                onClick={(e) => {
                  e.stopPropagation();
                  handledelete();
                }}
              >
                <Trash className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
            <p className="text-gray-400 text-2xl sm:text-3xl">{parseInt(pid, 10) + 1}</p>
          </div>
        </div>
      );
      
};

{/* <a
  href={git}
  target="_blank"
  rel="noopener noreferrer"
  className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md"
  >
<img src={cover} alt={title} className="h-[50%] w-[100%] relative" />
<p className="font-bold text-2xl text-gray-600">{title}</p>
<p className="text-gray-400 text-sm">{desc}</p>
<div className="w-full h-[10%] flex flex-row justify-end items-end gap-2">
{admin_user === "nivash_07" && (
  <>
  <button
  className="flex justify-center items-center gap-2 w-16 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-sm hover:shadow-red-100 hover:from-[#be123c] hover:to-[#fb7185]"
  onClick={(e) => {
    e.preventDefault(); // Prevent navigating away
                    handledelete();
                }}
                >
                <Trash className="w-5 h-5" />
                </button>
                </>
              )}
              <p className="text-gray-400 text-3xl">{parseInt(pid, 10) + 1}</p>
              </div>
              </a> */}
              {/* {showDetails && (
                  <div className="w-full mt-4 text-sm text-gray-500">
                    <p className="text-gray-400 text-sm">{desc}</p>
                  
                  <a href={git} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub Link
                  </a>
                </div>
              )} */}