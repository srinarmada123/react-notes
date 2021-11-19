import React,{useReducer} from 'react'

const initialState=[
        {
            id:1,
            title:"Rama",
            complete:false,
        },
        {
            id:2,
            title:"Sita",
            complete:false
        }
];

const reducer=(state,action)=>{
    switch(action.type){
        case "COMPLETE":
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return { ...todo, complete: !todo.complete };
                }
                else{
                    return todo;
                }
            })
            default:
                return state;
    }
}

function ReducerEx() {
    const [todos,dispatch]=useReducer(reducer,initialState);
    const handleComplete=(todo)=>{
        dispatch({type:"COMPLETE",id:todo.id});
    }
    return (
        <>
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete}
                        onChange={()=>handleComplete(todo)} />
                        {todo.title}                      
                    </label>
                </div>
            ) )}          
        </>
    );
}
export default ReducerEx