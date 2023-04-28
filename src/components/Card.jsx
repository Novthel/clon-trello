

export default function Card({ title, id , parentId, setDragged}) {

  
  function handleDragStart(){
    setDragged({
      data: {
        title,
        id
      },
      parentId

    })
  }

  return (
    <div draggable onDragStart={ handleDragStart } className="bg-slate-100 p-2 mb-2 shadow-lg rounded-lg hover:bg-slate-200 text-xs">
      { title }
    </div>
  )
}
