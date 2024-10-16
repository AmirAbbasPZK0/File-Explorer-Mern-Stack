import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Header = () => {

    const user = useSelector(state => state.user)

    return (<>
        <nav className="h-[70px] flex top-0 bg-blue-600 sticky justify-center items-center">
            <div className="h-[70px] flex items-center justify-between px-[50px] mx-auto w-[100%] max-w-[1300px]">
                <Link className='text-white text-[30px]' to={"/"}>
                    Home Page
                </Link>
                {user.isLogin ? (
                    <ul className='flex items-center justify-center text-center list-none'>
                        <li className='px-2'>
                            <Link to={"/dashboard"} className='p-3 rounded-sm bg-white font-semibold transition hover:bg-black hover:text-white'>{user?.data?.user.username}</Link>
                        </li>
                        <li>
                            <button className='p-3 rounded-md transition hover:bg-red-950 bg-red-600 text-white' onClick={()=>{
                                localStorage.removeItem("token")
                                window.location.reload()
                            }}>
                                Log out
                            </button>
                        </li>
                        
                    </ul>
                ) : (
                    <ul className='flex items-center justify-center text-center list-none'>
                        <li className='px-2'>
                            <Link to={"/signup"} className='p-3 rounded-sm bg-white font-semibold transition hover:bg-black hover:text-white'>Sign Up</Link>
                        </li>
                        <li className='px-2'>
                            <Link to={"/login"} className='p-3 rounded-sm bg-white font-semibold transition hover:bg-black hover:text-white'>Login</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    </>);
}
 
export default Header;