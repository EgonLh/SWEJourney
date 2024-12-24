// 1. Create Slice in Features
// 2. Create  Shape for Initial State
// 3. Create Initial State for Stat
// 4. Create Slice with reducers' actions
// 5. Create Selector to bind with UI
// 6. Expose actions and selector as essential parts of the process
// 7. Register in store
// 8. Bind With Components


// for shape in todoSlice
import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
    "userId"?: number,
    "id": string,
    "_id"?:string,
    "title": string,
    "completed"?: boolean
}

// for the shape of initial state
export interface TodoState {
    items: Todo[];
}

// creating initial state
const initialState: TodoState = {
    items: [
        {
            id: "1",
            title: "Task 1",
            completed: true
        }, {
            id: "2",
            title: "Task 2",
            completed: false
        }
    ]
}

// creating slice
export const todoSlice = createAppSlice({
    name: "todos",
    initialState,
    reducers: (create) => ({
        addTodo: create.reducer((state, action: PayloadAction<Todo>) => {
            state.items.push(action.payload);
        }),
        deleteTodo: create.reducer((state, action: PayloadAction<Todo>) => {
            state.items = state.items.filter(todo => todo.id != action.payload.id);
        }),
        updateTodo: create.reducer((state, action: PayloadAction<Todo>) => {
            state.items = state.items.map(todo => todo.id == action.payload.id?action.payload:todo);
        }),
        loadAllTodo:create.asyncThunk(
            async (amount: number) => {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const json = await response.json();
                console.log("todo Json :",json)
                return json;
            },
            {
                fulfilled: (state, action) => {
                    state.items = action.payload;
                },

            },
        ),
    }),
    selectors: {
        selectTodos: (todos) => todos.items,
    },
});

// exporting action and slicers
export const {addTodo,deleteTodo,updateTodo,loadAllTodo} = todoSlice.actions;
export const {selectTodos} = todoSlice.selectors;