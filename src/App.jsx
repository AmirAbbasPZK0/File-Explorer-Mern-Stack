import {Outlet} from 'react-router-dom'
import Header from './components/Header';
import useAsync from './hooks/useAsync'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loginHandler } from './redux/features/userReducer'


const App = () => {

  const token = localStorage.getItem("token")

  const dispatch = useDispatch()

  const {run} = useAsync("auth/me" , "GET" , token)

  useEffect(()=>{
    if(token){
      run().then(resData => {
        const data = {...resData.data , token}
        dispatch(loginHandler(data))
      }).catch(() => {
        localStorage.removeItem("token")
      })
    }
  },[])

  return (<>
    <Header/>
    <Outlet/>
  </>);
}

export default App;