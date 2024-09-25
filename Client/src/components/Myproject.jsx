import { Pencil, Trash,Check } from "lucide-react"
import { Toaster, toast } from 'sonner'
import React,{useState} from "react"
import { deleteProject } from "../services/api"
export const Myproject=({ title, desc, pid, cover,git, id,link,fetchprojects })=>{
    // const [login_user,setvisible]=useState(false);
    // const admin_user=localStorage.getItem('admin')
    // if(admin_user==='nivash_07'){
    //     ()=>setvisible(true)
    // }
    const[admin_user,setadmin_user]=useState(localStorage.getItem('admin'))
    const handledelete=async()=>{
        try{
            const res=await deleteProject(id)
            if(res.status==200){
                console.log("delete");
                toast('Delete successfully', {
                    className: 'bg-gradient-to-r from-red-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Check />, 
                });
                fetchprojects()

            }
        }catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <div
  className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md"
>
           
                <img src={cover} alt={title} className="h-[50%] w-[100%] relative"/>
                <p className="font-bold text-2x text-gray-600">{title}</p>
                <p className="text-gray-400 text-sm">
                    {desc}
                </p>
                <div className="w-full h-[10%] flex flex-row justify-end items-end gap-2 ">
                 {admin_user==='nivash_07' &&(
                    <>
                    <button
                        className="flex justify-center items-center gap-2 w-16 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-sm hover:shadow-red-100  hover:from-[#be123c] hover:to-[#fb7185]"
                        onClick={handledelete} >
                        <svg viewBox="0 0 15 15" className="w-5 fill-white">
                            <svg
                                className="w-6 h-6"
                                stroke="currentColor"
                                
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    
                                ></path>
                            </svg>
                            Button
                        </svg>
                    </button>
                    <button onClick={git} >github</button>
                    </>
                    )}   

                    <p className="text-gray-400 text-3xl">{parseInt(pid, 10) + 1}</p>
                </div>
            </div>
            
        </>
    )

}


{/* <>
<div className="flex flex-row gap-[3rem] w-">
<div className="flex flex-col justify-center  w-[20rem] h-[30rem] relative left-[15rem] top-[2rem] ">
   <div className="flex justify-center">
   <img src="src\assets\img\Screenshot 2024-09-19 160732.png" className="w-[19rem] h-[10rem] justify-center"/>
   </div>
   <div className="flex flex-col justify-center items-center">
   <h2 className="p-2 font-bold font-serif">AI CHAT</h2>
   </div>
   <p className="font-serif"> The objective of this project is to develop a chat AI web application that leverages the capabilities of Gemini AI, integrated with the Streamlit framework. 
       This application aims to provide users with an interactive and responsive platform for engaging in natural language conversations, offering assistance, 
       information retrieval, and personalized responses based on user input.</p>
</div>
<div className="flex flex-col justify-center  w-[22rem] h-[30rem] relative left-[16rem] top-[2rem] ">
   <div className="flex justify-center">
   <img src="src\assets\img\Screenshot 2024-09-19 160543.png" className="w-[19rem] h-[10rem] justify-center"/>
   </div>
   <div className="flex flex-col justify-center items-center">
   <h2 className="p-2 font-bold font-serif">IMAGE GENERATING</h2>
   </div>
   <p className="font-serif"> The goal of this project is to develop an image-generating web application that transforms textual descriptions into visual representations.
        By leveraging advanced AI models take the ai model from online website of Open source and modify it, the application will allow users to input prompts and receive generated images that accurately 
        reflect their descriptions and integrated with the Streamlit framework.</p>
</div>
</div>
</> */}