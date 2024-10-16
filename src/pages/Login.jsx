import {useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import useAsync from '../hooks/useAsync'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        if(token){
            navigate("/")
            window.location.reload()
        }
    },[])

    const {register , handleSubmit , formState , setError} = useForm()

    const {errors} = formState

    const {loading , run} = useAsync("auth/login" , "POST")
    
    const onSubmit = (e) => {
        run(e).then(res => {
            localStorage.setItem("token" , res.data.token)
            window.location.reload()
        }).catch(err => {
            console.log(err)
            setError("connector" , {type : "onChange" , message : err.response.data.message})
            setError("password" , {type : "onChange" , message : err.response.data.message})
        })
    }

    return (<>
        <div className="flex items-center justify-center pt-[80px]">
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl flex-col gap-6 w-[400px] bg-slate-50 h-[500px] rounded-md flex items-center justify-evenly" action="">
                <h4 className='text-[50px]'>Login</h4>
                <div className='flex flex-col items-center gap-4 w-[100%]'>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Username | Email :</h4>
                        <input {...register("connector")} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                        <p className="text-red-600">{errors?.connector?.message}</p>
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Password :</h4>
                        <input {...register("password")} type="password" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                        <p className="text-red-600">{errors?.password?.message}</p>
                    </label>
                    <div className='flex items-center justify-center'>
                        <span>Don't you have an account? <Link to={"/signup"} className="text-blue-500">Sign Up</Link></span>
                    </div>
                    <button disabled={loading} className='p-2 rounded-md bg-slate-800 transition hover:bg-black text-white w-[94%]' type='submit'>{loading ? "Pending..." : "Submit"}</button>
                </div>
            </form>
        </div>
    </>);
}
 
export default Login;