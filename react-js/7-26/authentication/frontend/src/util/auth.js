import { redirect } from "react-router-dom";

export  function getAuthToken(){
 const token =localStorage.getItem('token')
 return token
}

export function authLoader(){
    return getAuthToken()
}

export function checkAuthLoader(){
    let token = getAuthToken();
    return redirect('/auth')
}