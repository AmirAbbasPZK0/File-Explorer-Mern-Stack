import { useState } from "react";
import { FaFolderPlus } from "react-icons/fa";
import axios from "axios";
import {useSelector} from 'react-redux'

const CreateFolderModal = ({path}) => {
    
    const [open , setOpen] = useState(false)
    const [folderName , setFolderName] = useState("")
    const token = useSelector(state => state?.user?.data?.token)
    
    return (<>
        <div className={`${open ? "flex" : "hidden"} items-center justify-evenly gap-3 flex-col absolute left-[36%] top-[30%] w-[400px] h-[400px] bg-slate-300 p-3 rounded-md`}>
            <label className="gap-2 flex flex-col" htmlFor="">
                <h3>Folder Name</h3>
                <input onChange={e=>{
                    setFolderName(e.target.value)
                }} type="text" className="p-2 rounded-sm"/>
            </label>
            <div className="flex items-center justify-evenly flex-row gap-4">
                <button onClick={()=>{
                    axios({
                        url :`${import.meta.env.VITE_BASE_URL}/api/system/create-folder`,
                        method : "POST",
                        data : {path : `${path}/${folderName}`},
                        headers : {
                            "Authorization" : `${token}`
                        }
                    }).then(resData => {
                        window.location.reload()
                    })
                }} className="p-2 rounded-md bg-slate-900 text-white text-[14px]">Create Folder</button>
                <button onClick={()=>{
                    setOpen(false)
                }} className="p-2 rounded-md bg-red-700 text-white">Cancel</button>
            </div>
        </div>
        <button onClick={()=>{
            setOpen(item => !item)
        }} className="p-2"><FaFolderPlus/></button>
    </>);
}
 
export default CreateFolderModal;