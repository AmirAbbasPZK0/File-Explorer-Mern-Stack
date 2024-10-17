import {useSelector} from 'react-redux'


const Profile = () => {

    const data = useSelector(state => state?.user?.data?.user)

    console.log(data)

    return (<>
        <div className='flex flex-col items-start justify-start p-4'>
            <h1 className='text-[60px]'>Profile</h1>
            <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 rounded-md">
                <tr className='bg-white border-b dark:bg-slate-200 dark:border-slate-500'>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>Firstname</td>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>{data?.firstname}</td>
                </tr>
                <tr className='bg-white border-b dark:bg-slate-200 dark:border-slate-500'>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>Lastname</td>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>{data?.lastname}</td>
                </tr>
                <tr className='bg-white border-b dark:bg-slate-200 dark:border-slate-500'>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>Email</td>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>{data?.email}</td>
                </tr>
                <tr className='bg-white border-b dark:bg-slate-200 dark:border-slate-500'>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>Phone Number</td>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>{data?.phoneNumber}</td>
                </tr>
                <tr className='bg-white border-b dark:bg-slate-200 dark:border-slate-500'>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>Username</td>
                    <td className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-black'>{data?.username}</td>
                </tr>
            </table>
        </div>
    </>);
}
 
export default Profile;