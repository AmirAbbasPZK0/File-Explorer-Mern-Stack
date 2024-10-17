import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const File = ({path}) => {
    
    const [open , setOpen] = useState(false)
    
    const token = useSelector(state => state?.user?.data?.token)

    return (<>
        <div onClick={()=>{
            setOpen(item => !item)
        }} className="text-white bg-red-700 p-3 rounded-md flex flex-row justify-between">
            <h3>{path.split("/")[path.split("/").length - 1]}</h3>
            <div className={`${open ? "flex" : "hidden"} flex-col items-center`}>
                <button onClick={()=>{
                    axios({
                        url :`${import.meta.env.VITE_BASE_URL}/api/system/file`,
                        method : "DELETE",
                        data : {path},
                        headers : {
                            "Authorization" : `${token}`
                        }
                    }).then(() => {
                        window.location.reload()
                    })
                }}><FaTrashAlt/></button>
            </div>
        </div>
    </>);
}
 
export default File;