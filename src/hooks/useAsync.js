import { useState } from "react";
import axios from 'axios'

const useAsync = (innerUrl , method , token) => {

    const [loading , setLoading] = useState(false)
    
    const run = (body = null) => {
        setLoading(true)
        switch(method){
            case "GET":
                return new Promise((resolve , reject) => {
                    axios({
                        method,
                        url : `${import.meta.env.VITE_BASE_URL}/api/${innerUrl}`,
                        headers : {
                            "Authorization" : `${token}`
                        }
                    }).then(resData => {
                        resolve(resData)
                    }).catch(err => {
                        reject(err)
                    }).finally(()=>{
                        setLoading(false)
                    })
                })
            case "POST":
                return new Promise((resolve , reject) => {
                    axios({
                        method,
                        url : `${import.meta.env.VITE_BASE_URL}/api/${innerUrl}`,
                        data : body
                    }).then(resData => {
                        resolve(resData)
                    }).catch(err => {
                        reject(err)
                    }).finally(()=>{
                        setLoading(false)
                    })
                })
            case "DEL":
                return
            case "PUT":
                return
        }
    }


    return {run , loading}

}
 
export default useAsync;