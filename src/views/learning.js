import {useState} from "react";

function Learning(props) {
  let {draggleValue}=props
  let [isEnter,setEnter]=useState(false)
  let [getLeaningContent,setLearning]=useState([])
  const drop=(e)=>{
    e.preventDefault()
    let data = getLeaningContent
    console.log(data,draggleValue)
    let isSame = data.every(item => {
      return item.name!==draggleValue
    })
    if ((isSame||(data.length==0))) {
      if (data.length == 0) {
        data[0] = {name: draggleValue, id: 1,isShowDel:false}
        setLearning([...data])
      } else {
        setLearning([...data, {name: draggleValue, id: data.length + 1,isShowDel:false}])
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
  const learningEnterOrEnter=()=>{
    setEnter(!isEnter)
  }
  const mouseOver=(Index)=>{
    return ()=>{
      let data=getLeaningContent
      data[Index].isShowDel=!data[Index].isShowDel
      setLearning([...data])
    }
  }
  const deleteItem=(index)=>{
    return ()=>{
      let data=getLeaningContent
      data.splice(index,1)
      setLearning([...data])
    }
  }
  return(
    <div className="learning" >
      <span>Learning...</span>
      <div className={`content ${isEnter?'isEnter':''}`} onDragLeave={learningEnterOrEnter}
           onDrop={drop} onDragOver={dragOver} onDragEnter={learningEnterOrEnter} >
        {
          getLeaningContent.map((item,index)=>{
            return <div style={{height:"40px"}} onMouseOver={mouseOver(index)} onMouseOut={mouseOver(index)}>
            <div key={item.id} className="contentItem">
              {item.name}
            </div>
              <div className={`${item.isShowDel?'delete':''}`} onClick={deleteItem(index)}></div>
              </div>
          })
        }
      </div>
    </div>
  )
}
export default Learning
