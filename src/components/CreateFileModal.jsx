import { useState } from "react";
import { FaFileCirclePlus } from "react-icons/fa6";
import axios from "axios";
import {useSelector} from 'react-redux'

const CreateFileModal = ({path}) => {
    
    const [open , setOpen] = useState(false)
    const [fileName , setFileName] = useState("")
    const token = useSelector(state => state?.user?.data?.token)
    
    return (<>
        <div className={`${open ? "flex" : "hidden"} items-center justify-evenly gap-3 flex-col absolute left-[36%] top-[30%] w-[400px] h-[400px] bg-slate-300 p-3 rounded-md`}>
            <label className="gap-2 flex flex-col" htmlFor="">
                <h3>File Name</h3>
                <input onChange={e => setFileName(e.target.value)} type="text" className="p-2 rounded-sm"/>
            </label>
            <div className="flex items-center justify-evenly flex-row gap-4">
                <button onClick={()=>{
                    axios({
                        url :`${import.meta.env.VITE_BASE_URL}/api/system/file`,
                        method : "POST",
                        data : {path : `${path}/${fileName}`},
                        headers : {
                            "Authorization" : `${token}`
                        }
                    }).then(resData => {
                        window.location.reload()
                    })
                }} className="p-2 rounded-md bg-slate-900 text-white text-[14px]">Create File</button>
                <button onClick={()=>{
                    setOpen(false)
                }} className="p-2 rounded-md bg-red-700 text-white">Cancel</button>
            </div>
        </div>
        <button onClick={()=>{
            setOpen(item => !item)
        }} className="p-2 text-[20px]"><FaFileCirclePlus/></button>
    </>);
}
 
export default CreateFileModal;