import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/Index";
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);

    const dispatch = useDispatch();
    return (
        <div className="main-div">
            <div className="child-div">
                <div className="add-items">
                    <p className="header1">Add Your List Here </p>
                    <input type="text" className="input-items" placeholder="Add Items Here"
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}></input>
                    <button className="add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>add</button>
                </div>
                <div className="show-items">
                    {
                        list.map((ele) => {
                            return (
                                <div className="each-item" key={ele.id}>
                                    <button className="items-add">{ele.data}</button>
                                    <button className=" del-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(ele.id))}> del</button>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )

}
export default Todo;