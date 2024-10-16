import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Folder from '../components/Folder'

const Dashboard = () => {

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
            <Folder path={"/root"}/>
        </div>
    </>);
}
 
export default Dashboard;