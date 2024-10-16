import { useEffect, useState } from "react";
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa";
import axios from 'axios'
import {useSelector} from 'react-redux'
import CreateFolderModal from "./CreateFolderModal";

const Folder = ({path}) => {

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
        }} className="flex w-[100%] p-4 cursor-pointer rounded-sm items-center justify-between bg-slate-300">
            <h1>{path.split("/")[path.split("/").length - 1]}</h1>
            <div className="flex items-center gap-2">
                <h3>{isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</h3>
            </div>
        </button>
        <div className={`${isOpen ? "flex" : "hidden"}`}>
            <CreateFolderModal path={path}/>
            <button onClick={()=>{
                console.log(path)
            }} className="p-2 text-[20px]"><FaFileCirclePlus/></button>
        </div>
        <div className={`${isOpen ? "flex flex-col" : "hidden"}`}>
            {dataList?.map(item => (
                <div key={item} className="px-2 py-2 my-2">
                    {item.includes(".") ? (
                        <div>{path}/{item}</div>
                    ) : (
                        <Folder path={`${path}/${item}`}/>
                    )}
                </div>
            ))}
        </div>
    </>);
}
 
export default Folder;