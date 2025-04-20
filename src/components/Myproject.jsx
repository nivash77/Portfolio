import { Pencil, Trash, Check } from "lucide-react";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import { deleteProject } from "../services/api";

export const Myproject = () => {
    const [admin_user, setadmin_user] = useState(localStorage.getItem("admin"));
    const [showDetails, setShowDetails] = useState(null); 
    
    const handledelete = async () => {
        console.log("Project ID:", id); 
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
    const toggleDetails = (project) => {
      setShowDetails(showDetails === project ? null : project);
      };
     

      return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
          
          
        <div
          className="service-card w-full sm:w-[200px] lg:w-[300px] md:h-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md border-gray-300"
          onClick={()=>toggleDetails("BLOG")}
        >
          {/* Cover Image */}
          <img
            src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images.png?updatedAt=1743784246754"
            alt="BLOG Website"
            className="h-[40%] sm:h-[50%] w-full object-cover rounded-md mb-4"
          />
      
          {/* Title */}
          <p className="font-bold text-xl sm:text-2xl text-gray-600">BLOG website</p>
      
          {/* Modal for Details */}
          {showDetails==="BLOG" && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={()=>toggleDetails("BLOG")}
            >
              <div
                className="relative bg-white p-6 w-[90%] max-w-md rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={()=>toggleDetails("BLOG")}
                >
                  ✕
                </button>
                <img
                  src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images.png?updatedAt=1743784246754"
                  alt="BLOG website"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="font-bold text-lg text-gray-800 mb-2">BLOG website</h2>
                <p className="text-sm text-gray-600 mb-4">Developed a modern blog website using Next.js, featuring functionalities such as adding posts, managing user details, and
                handling comments. This project provides a fast, dynamic, and user-friendly blogging experience.</p>
          
                <a
                  href="https://github.com/nivash77/BlogProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  GitHub Link
                </a>
                
              </div>
            </div>
          )}
      
        </div>
         <div
         className="service-card w-full sm:w-[200px] lg:w-[300px] md:h-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md border-gray-300"
         onClick={()=>toggleDetails("Food Recipes")}
       >
         {/* Cover Image */}
         <img
           src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/diet.png?updatedAt=1743781556157"
           alt="Food Recipes"
           className="h-[40%] sm:h-[50%] w-full object-cover rounded-md mb-4"
         />
     
         {/* Title */}
         <p className="font-bold text-xl sm:text-2xl text-gray-600">Food Recipes</p>
     
         {/* Modal for Details */}
         {showDetails==="Food Recipes" && (
           <div
             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
             onClick={()=>toggleDetails("Food Recipes")}
           >
             <div
               className="relative bg-white p-6 w-[90%] max-w-md rounded-lg shadow-lg"
               onClick={(e) => e.stopPropagation()}
             >
               <button
                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                 onClick={()=>toggleDetails("Food Recipes")}
               >
                 ✕
               </button>
               <img
                 src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/diet.png?updatedAt=1743781556157"
                 alt="Food Recipes"
                 className="w-full h-40 object-cover rounded mb-4"
               />
               <h2 className="font-bold text-lg text-gray-800 mb-2">Food Recipes</h2>
               <p className="text-sm text-gray-600 mb-4">Co-developed a website for learning and teaching cooking skills, enabling users to explore, share, and discover recipes.</p>
         
               <a
                 href="https://topping-phi.vercel.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-500 hover:underline mt-2 block"
               >
                 Live Link
               </a>
             </div>
           </div>
         )}
     
       </div>
       <div
          className="service-card w-full sm:w-[200px] lg:w-[300px] md:h-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md border-gray-300"
          onClick={()=>toggleDetails("AI_CHAT")}
        >
          {/* Cover Image */}
          <img
            src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/Screenshot%202024-09-19%20160732.png?updatedAt=1743781556081"
            alt="AI CHAT"
            className="h-[40%] sm:h-[50%] w-full object-cover rounded-md mb-4"
          />
      
          {/* Title */}
          <p className="font-bold text-xl sm:text-2xl text-gray-600">AI CHAT</p>
      
          {/* Modal for Details */}
          {showDetails==="AI_CHAT" && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={()=>toggleDetails("AI_CHAT")}
            >
              <div
                className="relative bg-white p-6 w-[90%] max-w-md rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={()=>toggleDetails("AI_CHAT")}
                >
                  ✕
                </button>
                <img
                  src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/Screenshot%202024-09-19%20160732.png?updatedAt=1743781556081"
                  alt="AI CHAT"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="font-bold text-lg text-gray-800 mb-2">AI CHAT</h2>
                <p className="text-sm text-gray-600 mb-4">Developed a Chat AI application using Gemini AI's prebuilt model, integrated with Python's Streamlit
framework, to enable real-time conversational capabilities with a responsive and intuitive user
interface. that leverages the capabilities of Gemini AI, integrated with the Streamlit framework.  This application aims to provide users with an interactive and responsive platform for engaging in natural language conversations, offering assistance, information retrieval, and personalized responses based on user input</p>
          
                <a
                  href="https://github.com/nivash77/AI-CHAT-BOT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          )}
      
        </div>
      </div>
      );
      
};

