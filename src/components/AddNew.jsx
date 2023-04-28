import { addList, addCard } from "@/redux/reducer/TaskSlice";
import { useState } from "react"
import { BsXLg, BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


export default function AddNew({ type, parentId }) {

    const dispatch = useDispatch()

    const [ inputValue, setInputValue ] = useState('')
    const [ isFormVisible, setIsFormVisible ] = useState(false)

    const updateInput =(e)=>{
        e.preventDefault()
        if(inputValue !== ''){
            if(type){
                dispatch(addCard({
                    data:{
                        id: uuidv4(),
                        title:inputValue
                    },
                    parentId: parentId
                }))
            }else{
                dispatch(addList({
                    id: uuidv4(),
                    title:inputValue
                }))
            }
            hidenForm()
        }
    }

    const showForm=()=>{
        setIsFormVisible(true)
    }

    const hidenForm=()=>{
        setIsFormVisible(false)
        setInputValue('')
    }

  return (
    <div className="bg-slate-100 p-3 rounded-lg text-xs font-medium hover:bg-blue-100">
        { !isFormVisible && <button onClick={ showForm } className="flex gap-1 items-center">
            <BsPlusLg /> add { type? 'a card': 'another list'}
        </button>}
        {
            isFormVisible && (
                <form onSubmit={ updateInput } className="mt-2">
                    <input 
                        type="text" 
                        placeholder={`${ type? 'Enter a title for this card...':' Enter the title of the List...'}`}
                        value={ inputValue } 
                        onChange={e=> setInputValue(e.target.value)}  
                        className="w-full p-2 rounded-md text-xs"
                        />
                    <div className="flex gap-3 mt-2">
                        <button 
                            onClick={ updateInput }
                            className="bg-blue-700 p-2 text-gray-100 rounded-sm text-xs"
                            >
                            {`add ${type?'card':'list'}`}
                        </button>
                        <button 
                            onClick={ hidenForm }
                            className="text-slate-800 text-xl"
                            >
                            <BsXLg />
                        </button>  
                    </div>
                </form>
            )
        }
      
    </div>
  )
}
