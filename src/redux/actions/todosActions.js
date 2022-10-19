import { SET_TODOS } from "../types";

const addTodo = (todo) => {
    return {
        type: SET_TODOS,
        payload: todo,
    }
}

export default {
    addTodo
}