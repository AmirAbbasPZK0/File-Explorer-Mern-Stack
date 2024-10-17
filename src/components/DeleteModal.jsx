import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const DeleteModal = ({path}) => {
    
    const [open , setOpen] = useState(false)

    const token = useSelector(state => state?.user?.data?.token)

    return (<>
        <div className={`${open ? "flex" : "hidden"} items-center justify-evenly gap-3 flex-col absolute left-[36%] top-[30%] w-[400px] h-[400px] bg-slate-300 p-3 rounded-md`}>
            <h1>You sure that you want to delete <h3 className=""><span>"{path.split('/')[path.split('/').length - 1]}"</span></h3></h1>
            <div className="flex items-center justify-evenly flex-row gap-4">
                <button onClick={()=>{
                    axios({
                        url :`${import.meta.env.VITE_BASE_URL}/api/system/folder`,
                        method : "DELETE",
                        data : {path},
                        headers : {
                            "Authorization" : `${token}`
                        }
                    }).then(() => {
                        window.location.reload()
                    })
                }} className="p-2 rounded-md bg-slate-900 text-white text-[14px]">Delete</button>
                <button onClick={()=>{
                    setOpen(false)
                }} className="p-2 rounded-md bg-red-700 text-white">Cancel</button>
            </div>
        </div>
        <button onClick={()=>{
            setOpen(true)
        }} className="">
            <FaTrashAlt/>
        </button>
       
    </>);
}
 
export default DeleteModal;