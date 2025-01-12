import { Pencil, Trash, Check } from "lucide-react";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import { deleteProject } from "../services/api";

export const Myproject = ({ title, desc, pid, cover, git, id, link, fetchprojects }) => {
    const [admin_user, setadmin_user] = useState(localStorage.getItem("admin"));

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
    

    return (
        <>
            <a
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
            </a>
        </>
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