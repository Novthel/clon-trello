import AddNew from "./AddNew";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function List({ handleDrop, setDragged }) {

  const listItem= useSelector(state=> state.task.list )

  const handleDragOver=(e)=>{
    e.preventDefault()
    
  }

  return (
    <>
        {
          listItem.length > 0 && listItem.map( list =>(
            <div onDragOver={ handleDragOver } 
                onDrop={ handleDrop } 
                key={list.id} 
                className="w-72 p-3" 
                data-list={ list.id }
            >
                <div className="p-3 bg-gray-200 font rounded-xl" >
                  <div className="text-sm font-semibold px-2 text-slate-700 mb-4"> { list.title }</div>
                  { list?.children?.length > 0 && list.children.map( children => <Card key={ children.id}  parentId={ list.id }  {...children} setDragged={ setDragged }/> ) }
                  <div><AddNew type='card' parentId={ list.id } /></div>     
                </div>    
            </div>   
          ))
        }
      <div className="w-80 p-3">
        <AddNew />
      </div>   
    </>
  
  )
}
