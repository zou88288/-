import "../../mock/weather"
import  "./index.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
function Weather(){
  const navigate=useNavigate()
  const [weatherData,setWeather]=useState([])
  let [currentWeather,setCurrentWeather]=useState({})
  const goLogin=()=>{
    navigate('/',{
      replace:true
      }
    )
  }
  useEffect(()=>{
    axios.get("/mock/weather").then(res=>{
      setWeather(res.data.data)
      if(currentWeather){
        setCurrentWeather(res.data.data[0])
      }
    })
  },[])
  const selectChange=(e)=>{
    console.log(weatherData)
    let data=[]
    weatherData.forEach((item,index)=>{
      if(item.city==e.target.value){
        data=weatherData[index]
      }
    })
    console.log(data)
    setCurrentWeather(data)
  }
  return (
    <div className="header">
      <div className="select">
        <h2>天气预报</h2>
        <select onChange={selectChange}>
          <option>衡阳</option>
          <option>北京</option>
          <option>天津</option>
        </select>
        <div className="weather">
          <div>当前天气为:{currentWeather.weather}</div>
        </div>
        <button style={{border:"none",padding:"7px 10px",marginLeft:"100px"}}
        onClick={goLogin}>退出登录</button>
      </div>
    </div>
  )
}
export default Weather
