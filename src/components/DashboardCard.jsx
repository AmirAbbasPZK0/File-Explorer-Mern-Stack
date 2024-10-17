import { useNavigate } from "react-router-dom";

const DashboardCard = ({title , image , link}) => {
    
    const navigate = useNavigate()
    
    return (<>
        <div onClick={()=>{
            navigate(link)
        }} className='rounded-md w-[300px] cursor-pointer h-[300px] transition hover:bg-slate-900 hover:text-white bg-slate-100 flex'>
            <img src={image} className='w-[100%] h-[100%]' alt="" />
            <h1 className="absolute text-[20px] p-3">{title}</h1>
        </div>
    </>);
}
 
export default DashboardCard;