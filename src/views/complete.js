import {useState} from "react";

function Complete(props) {
  let {draggleValue}=props
  let [getcomplete,setComplete]=useState([])
  let [isEnter,setEnter]=useState(false)
  const drop=(e)=>{
    e.preventDefault()
    let data =getcomplete
    const isSame = data.every(item => {
      return item.name!==draggleValue
    })
    if (isSame||(data.length===0)) {
      if (data.length == 0) {
        data[0] = {name: draggleValue, id: 1,isShowDel:false}
        setComplete([...data])
      } else {
        setComplete([...data, {name: draggleValue, id: data.length+1,isShowDel:false}])
      }
      props.addContentFinish(draggleValue)
    }else{
      // alert('已有该值')
    }
    setEnter(false)
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const completeEnterOrLeave=()=>{
    setEnter(!isEnter)
  }
  const mouseOver=(Index)=>{
    return ()=>{
      let data=getcomplete
      data[Index].isShowDel=!data[Index].isShowDel
      setComplete([...data])
    }
  }
  const deleteItem=(index)=>{
    return ()=>{
      let data=getcomplete
      data.splice(index,1)
      setComplete([...data])
    }
  }
  return(
    <div className="complete">
      <span>Complete</span>
      <div className={`content ${isEnter?'isEnter':''}`}   onDrop={drop}  onDragOver={dragOver}
           onDragEnter={completeEnterOrLeave} onDragLeave={completeEnterOrLeave}>
        {
          getcomplete.map((item,index)=>{
            return  <div style={{height:'40px'}}  onMouseOver={mouseOver(index)} onMouseOut={mouseOver(index)}>
            <div key={item.id} className="contentItem">{item.name}</div>
            <div className={`${item.isShowDel?'delete2':''}`} onClick={deleteItem(index)}></div>
          </div>
          })
        }
      </div>
    </div>
  )

}
export default Complete
