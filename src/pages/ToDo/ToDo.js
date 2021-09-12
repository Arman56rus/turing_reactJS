import React from "react";
import {useDispatch} from "react-redux";

import styles from "./ToDo.module.css"
import HandleForm from "../../components/HandleForm/HandleForm";
import ToDoList from "../../components/ToDoList/ToDoList";
import {addElem} from "../../slices/ToDoSlice"
import Counter from "../../features/counter/Counter";

const ToDo = () => {

    const dispatch = useDispatch()

    const addElemToList = (elem) => {
        dispatch(addElem(elem))
    }
    return (
        <div className={styles.container}>
            <HandleForm onClick={addElemToList}/>
            <ToDoList/>
        </div>
    )
}

export default ToDo
