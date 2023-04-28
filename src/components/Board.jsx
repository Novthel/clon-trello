import React, { useState } from 'react'
import List from './List'
import { useDispatch } from 'react-redux'
import { draggedCard, deleteCard } from '@/redux/reducer/TaskSlice'


export default function Board() {

  const [ dragged, setDragged ] = useState(null)
  const dispatch = useDispatch()

  const handleDrop=(e)=>{
    e.preventDefault()
    
    const listEnd = e.currentTarget.dataset.list
  
    dispatch(draggedCard({
      dragged, 
      listEnd, 
    }))
    dispatch(deleteCard({
      dragged
    }))
  }

  return (
    <div className='w-full bg-blue-800 p-4'>
        <div className='flex flex-wrap gap-1'>
            <List handleDrop={ handleDrop } setDragged={ setDragged } />
        </div>
    </div>
  )
}
