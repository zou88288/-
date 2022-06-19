import {useState} from "react";
import Weather from "../../components/headerWeather/headerWeather";
import Learning from "../learning";
import Complete from "../complete";
import './task.css'
function Task(){
 let [draggleValue,setDraggleValue]=useState('')
  let [addContentKey,setContent]=useState([])
  const addContentItem=()=>{
    if((addContentKey.length)==7){
      alert("最多只能添加7条数据")
    }else {
      if ((addContentKey.length == 0) || (addContentKey[addContentKey.length - 1].name)) {
        setContent([...addContentKey, {name: '', id: addContentKey.length + 1,isShowInput:true}])
      } else {
        console.log(addContentKey)
        alert('请填充完成上一个数据')
      }
    }
  }
  const changeValue=(e)=>{
    let value=e.target.value
    const temp=addContentKey
    temp[addContentKey.length-1]={name:value,id:addContentKey.length,isShowInput:true}
    console.log(temp)
    setContent([...temp])
  }
  const dragStart=(e)=>{
    setDraggleValue(e.target.id)
    console.log(draggleValue)
    console.log('dragStart')
  }
  const dragging=()=>{
    console.log('dragging')
  }
  const addContentFinish=(value)=>{
    let Index=0
    addContentKey.forEach((item,index)=>{
      if(item.name==value){
        Index=index
      }
    })
    const data=addContentKey
    data.splice(Index,1)
    console.log(data)
    setContent([...data])
  }
  const inputBlurAndShowInput=(Index)=>{
    return ()=> {
      let data = addContentKey
      const noSame=data.every((item,index)=>{
        if(Index==index) return true
        return item.name != data[Index].name
      })
      if(noSame){
        console.log(Index)
        data[Index].isShowInput = !data[Index].isShowInput
        setContent([...data])
      }else{
        alert('重复了')
      }
    }
  }
  return (
    <div>
      <Weather/>
      <div className="App">
        <div className="prepare">
          <span className='title'>Prepare to study</span>
          <div className="content">
            {addContentKey.map((item,index)=>{
              return (
                <div>
                  <input type="text" key={item.id} className={`focus ${!item.isShowInput?'hide':''}`}  value={item.name}
                         onBlur={inputBlurAndShowInput(index)} onChange={changeValue} autoFocus={true} />
                  <span className={`${item.isShowInput?'hide':'inputBlur '}`} key={item.name} draggable={true} value={item.name}
                        onClick={inputBlurAndShowInput(index)}   onDragStart={dragStart} id={item.name} onDrag={dragging}
                        onChange={changeValue} autoFocus={true}>{item.name}</span>
                </div>
              )
            })}
            <span className="addContent title" onClick={addContentItem} >+</span>
          </div>
        </div>
        <Learning draggleValue={draggleValue} addContentFinish={addContentFinish}/>
        <Complete draggleValue={draggleValue} addContentFinish={addContentFinish}/>
      </div>
    </div>
  )
}
export default Task
