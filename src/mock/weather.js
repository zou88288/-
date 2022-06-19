import Mock from 'mockjs'
import weather from './weather.json'
Mock.mock("/mock/weather",{code:200,data:weather})
