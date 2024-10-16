import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAsync from '../hooks/useAsync'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const SignUp = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(token){
            navigate("/")
            window.location.reload()
        }
    },[])

    const {register , handleSubmit , formState} = useForm()

    const {errors} = formState

    const {loading , run} = useAsync("auth/signup" , "POST")
    
    const onSubmit = (e) => {
        run(e).then(res => {
            localStorage.setItem("token" , res.data.token)
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    }

    return (<>
        <div className="flex items-center justify-center pt-[80px] pb-[80px]">
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl flex-col gap-6 w-[400px] pb-3 pt-3 bg-slate-50 rounded-md flex items-center justify-evenly" action="">
                <h4 className='text-[50px]'>Sign up</h4>
                <div className='flex flex-col items-center gap-4 w-[100%]'>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Firstname :</h4>
                        <input {...register("firstname")} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Lastname :</h4>
                        <input {...register("lastname")} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Username :</h4>
                        <input {...register("username")} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Email :</h4>
                        <input {...register("email")} type="email" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Phone Number :</h4>
                        <input {...register("phoneNumber" , {
                            pattern : {
                                message : "Phone Number is not valid",
                                value : /^(0|09|09[0-9]{1,9})$/
                            }
                        })} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                        <p className="text-red-600">{errors?.phoneNumber?.message}</p>
                    </label>
                    <label htmlFor="" className='flex items-start justify-start flex-col gap-2 w-[94%]'>
                        <h4>Password :</h4>
                        <input {...register("password")} type="text" className='w-[100%] p-2 border-2 border-slate-300 rounded-md' />
                    </label>
                    <div className='flex items-center justify-center'>
                        <span>Don you have already an account? <Link to={"/login"} className="text-blue-500">Login</Link></span>
                    </div>
                    <button disabled={loading} className='p-2 rounded-md bg-slate-800 transition hover:bg-black text-white w-[94%]' type='submit'>{loading ? "Pending..." : "Submit"}</button>
                </div>
            </form>
        </div>
    </>);
}
 
export default SignUp;