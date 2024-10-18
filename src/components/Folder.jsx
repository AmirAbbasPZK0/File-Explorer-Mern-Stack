import { useEffect, useState } from "react";
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import File from "./File";
import axios from 'axios'
import {useSelector} from 'react-redux'
import CreateFolderModal from "./CreateFolderModal";
import CreateFileModal from "./CreateFileModal";
import DeleteModal from "./DeleteModal";

const Folder = ({path , isDeletable}) => {

    const [isOpen , setIsOpen] = useState(false)

    const token = useSelector(state => state?.user?.data?.token)

    const [dataList , setDataList] = useState([])

    useEffect(()=>{
        axios({
            url :`${import.meta.env.VITE_BASE_URL}/api/system`,
            method : "POST",
            data : {path},
            headers : {
                "Authorization" : `${token}`
            }
        }).then(resData => {
            setDataList(resData.data)
        })
    },[])

    return (<>
        <button onClick={()=>{
            setIsOpen(item => !item)
        }} className="flex w-[100%] p-4 cursor-pointer transition rounded-sm items-center justify-between bg-slate-300 hover:bg-slate-700 hover:text-slate-50">
            <h1>/{path.split("/")[path.split("/").length - 1]}</h1>
            <div className="flex items-center gap-2">
                <h3>{isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</h3>
            </div>
        </button>
        <div className={`${isOpen ? "flex" : "hidden"}`}>
            <CreateFolderModal path={path}/>
            <CreateFileModal path={path}/>
            {isDeletable && <DeleteModal folderOrFile="folder" path={path}/>}
        </div>
        <div className={`${isOpen ? "flex flex-col" : "hidden"}`}>
            {dataList?.map(item => (
                <div key={item} className="px-2 py-2 my-2">
                    {item.includes(".") ? (
                        <File path={`${path}/${item}`}/>
                    ) : (
                        <Folder isDeletable={true} path={`${path}/${item}`}/>
                    )}
                </div>
            ))}
        </div>
    </>);
}
 
export default Folder;