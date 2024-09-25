import {Trash ,Check, Plus , MessageCircleWarning} from "lucide-react"
import React,{ useRef, useState } from "react"
import { addProject } from "../services/api"
import { IoCloseCircleOutline } from "react-icons/io5";
import { Toaster, toast } from 'sonner'
export const Addprojectcomponents=({fetchprojects})=>{
    const titler=useRef(null)
    const descr=useRef(null)
    const linkr=useRef(null)
    const coverr=useRef(null)
    const gitr=useRef(null)

    const handleaddProject= async(e)=>{
        e.preventDefault();
        const projectdata={
            title:titler.current.value,
            desc:descr.current.value,
            link:linkr.current.value,
            cover:coverr.current.value,
            git:gitr.current.value
        };
        try{
            const res=await addProject(projectdata)
            if(res.status==201){
                console.log("ADDED")
                toast('Project Added', {
                    className: 'bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Check />,
                });
                fetchprojects()
            }
        }catch(error){
            toast.log(error)
            toast('Error', {
                className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                icon: <MessageCircleWarning />,
            });
        }
        setvisi(false)

    }
    const [visi,setvisi]=useState(false);
    return(
        <>
            <button  onClick={()=>setvisi(true)} className=" flex justify-center bg-green-300 h-8 w-32 rounded-md font-bold text-gray-500 items-center">AddProject<Plus className=" flex w-6 h-6 justify-center items-center"/></button>
            {
            visi &&(
                
                <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                <div className=" h-[80%] w-[25%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                    <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-black  text-xl font-bold ">
                        <div className="w-2/3 flex justify-center">
                            Project
                        </div>
                        <div className="w-2/3 flex justify-end">
                            <IoCloseCircleOutline  onClick={()=>setvisi(!visi)}/>
                        </div>
                    </div>
                    <div className="w-full h-[100%] flex flex-row justify-center items-center">
                        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleaddProject}>
                            <input type="text" ref={titler} name="" id="title" placeholder="Title" required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md" />
                            <input type="text" ref={descr} name="" id="desc" placeholder="Description"  required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md"/>
                            <input type="text" ref={linkr} name="" id="link" placeholder="ProjectLink" className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md"/>
                            <input type="text" ref={coverr} name="" id="cover" placeholder="Covering Url"  required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md"/>
                            <input type="text" ref={gitr} name="" id="git" placeholder="github url"  required className="p-3 bg-[#e7e8ea] w-full font-bold outline-none active:outline-none focus:border-b-4 hover:border-gray-500 rounded-md"/>

                            <button type="submit" className="bg-gray-600 p-3 text-black w-full h-[3rem] rounded-sm text-lg font-bold hover:bg-gray-500 shadow-lg shadow-slate-400">Sumbit</button>
                        </form>
                    </div>
                    
                </div>
            </div>

            )
        }
        </>
    )
}