import ChosenIcon from "./ChosenIcon";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const File = ({path}) => {
    
    const [open , setOpen] = useState(false)
    
    const token = useSelector(state => state?.user?.data?.token)

    const title = path.split("/")[path.split("/").length - 1]

    const endPoint = title.split(".")[1]

    return (<>
        <button onClick={()=>{
            setOpen(item => !item)
        }} className="text-white bg-red-500 p-3 rounded-md flex transition hover:bg-red-900 flex-row justify-between w-[100%]">
            <h3 className="flex flex-row gap-2">/{title.split(".")[0]} <ChosenIcon endPoint={endPoint}/></h3>
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
        </button>
    </>);
}
 
export default File;