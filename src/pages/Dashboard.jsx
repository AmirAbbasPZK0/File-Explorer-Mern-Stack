import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import FileManagerImage from '../../public/file-manager.png'
import ProfileImage from '../../public/profile.png'
import DashboardCard from '../components/DashboardCard'

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
        <div className="flex items-start flex-col justify-start p-4 gap-3">
            <h1 className='text-[50px]'>Dashboard</h1>
            <div className='flex flex-wrap gap-4'>
                <DashboardCard link={"/dashboard/file-manager"} title={"File Explorer"} image={FileManagerImage}/>
                <DashboardCard link={"/dashboard/profile"} title={"Profile"} image={ProfileImage}/>
            </div>
        </div>
    </>);
}
 
export default Dashboard;