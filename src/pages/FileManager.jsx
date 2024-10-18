import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Folder from '../components/Folder'

const FileManager = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        if(!token){
            navigate("/")
            window.location.reload()
        }
    },[])

    return (<>
        <div className="pt-4 p-3">
            <h1 className='text-[50px]'>File Manager</h1>
            <Folder isDeletable={false} path={"root"}/>
        </div>
    </>);
}
 
export default FileManager;