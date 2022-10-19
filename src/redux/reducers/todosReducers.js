const todosList = {
    todos: [
        {
            name: 'me',
            date: new Date(),
            status: true
        }
    ],
}

const { SET_TODOS } = require("../types");

const todosReducer = (state = todosList, action) => {
    switch (action.type) {
        case SET_TODOS:
            return { ...state, todos: action.payload };
            break;
        default:
            return state;
    }
}

export default {
    todosReducer
}