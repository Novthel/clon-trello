import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        list:[]
    },
    reducers:{
        addList: (state, action)=>{
            state.list.push(action.payload)
        },
        addCard: (state, action)=>{
            state.list.forEach(item => {
                if(item.id === action.payload.parentId){
                    console.log(action.payload)
                    if(Object.hasOwn(item,"children")){
                        item.children.push(action.payload.data)
                    }else {
                        item.children=[]
                        item.children.push(action.payload.data)
                    }
                }
            })
        },
        draggedCard: (state, action )=>{
            
            state.list.forEach( item =>{
                if(item.id === action.payload.listEnd){
                    if(Object.hasOwn(item,"children")){
                        item.children.push(action.payload.dragged.data)
                    }else {
                        item.children=[]
                        item.children.push(action.payload.dragged.data)
                    }
                }
            }) 
            
        },

        deleteCard: (state, action )=>{
            
            const listFound = state.list.find( item => item.id === action.payload.dragged.parentId) 
            const cardFound = listFound.children.find( card => card.id === action.payload.dragged.data.id )
            listFound.children.splice(listFound.children.indexOf(cardFound),1)   
        }
    }
})

export const { addList, addCard, draggedCard, deleteCard } = taskSlice.actions
export default taskSlice.reducer