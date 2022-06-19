import {useNavigate} from 'react-router-dom'
import "./index.css"
import axios from "axios";
import "../../mock/weather"
import {useState} from "react";
function Login(){
const navigate=useNavigate()
  const [user,setUser]=useState({username:'',password:''})
  const goTask=()=>{
  axios.get("/mock/login").then(res=>{
    const userInfo=res.data.data
    console.log(user)
    if((user.username==userInfo.username)&&(user.password==userInfo.password)){
      navigate("/task",{
        replace:true
      })
    }else{
      alert("账号或密码出错了")
    }
    })
  }
  const userInfoChange=(userOrPwd)=>{
    return (event)=>{
      let data=user
       data[userOrPwd]=event.target.value
       setUser(data)
    }
  }
  return(
    <div>
      <div className="message">温馨提示:账号是admin,密码是:123456</div>
    <div className="login">
      <div style={{textAlign:'center',color:"green",marginBottom:"20px"}}><h2>登录页面</h2></div>
      <div>
        <input type="text" className="input" placeholder="请输入您的账号" onChange={userInfoChange("username")}/>
      </div>
      <div>
        <input type="password" className="input" placeholder="请输入您的密码" onChange={userInfoChange("password")}/>
      </div>
      <div>
    <button onClick={goTask}>登录</button>
      </div>
    </div>
    </div>
  )
}
export default Login
