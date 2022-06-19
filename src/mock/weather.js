import Mock from 'mockjs'
import weather from './weather.json'
import login from './login.json'
Mock.mock("/mock/weather",{code:200,data:weather})
Mock.mock("/mock/login",{code:200,data:login})
