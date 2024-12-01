import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
    todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
            saveTodosToLocalStorage(state.todos); 
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveTodosToLocalStorage(state.todos); 
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone }; 
                }
                return todo;
            });
            saveTodosToLocalStorage(state.todos); 
        },
    }
});

export const { addTodos, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;

// for without local storage

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos : [{id: "abc" , task: "demo task" , isDone: false}],
// };

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//         addTodos : (state,action)=>{
//             const newTodo = {
//                 id : nanoid(),
//                 task : action.payload,
//                 isDone : false,
//             }
//             state.todos.push(newTodo);
//         },
//         deleteTodo : (state,action)=>{
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//         },
//         markAsDone: (state,action) =>{
//             state.todos = state.todos.map( todo =>{
//                 if (todo.id === action.payload && !todo.isDone) {
//                     return { ...todo, isDone: true }; 
//                 }
//                 if (todo.id === action.payload && todo.isDone) {
//                     return { ...todo, isDone: false }; 
//                 }
//                 return todo;
//             });
//         },
//     }
// });

// export const { addTodos, deleteTodo, markAsDone } = todoSlice.actions;

// export default todoSlice.reducer;