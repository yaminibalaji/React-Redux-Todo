//import { useState } from "react"

const initialData ={
    list :[]
}
//const [list, setList]= useState([]);
const todoReducers=(state = initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {id, data} = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data

                }
            ]

            }
        case "DELETE_TODO":
           const newList = state.list.filter((ele)=>ele.id!==action.id);
            return{
                ...state,
                list:newList
            

            }
        // case "REMOVE_TODO":$ git clone https://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@github.com/yaminibalaji/React-Redux-Todo.git
//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
        default: return state;
    }
    

}
export default todoReducers;