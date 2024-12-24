//ide errors can occurs
"use client"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Todo} from "@/lib/features/todos/todoSlice";

console.log("ENV SLICE FROM SEVER :",process.env.BACKEND_URL)

export const todoApiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api"}),
    reducerPath: "todoAPI",
    tagTypes: ["Todo"],
    endpoints: (build) => ({
        getAllTodo: build.query<Todo[]>({
            query: () => `/todos`,
            // providesTags: () => ["Todo"]
            providesTags:(result,error,arg)=>
                result?[...result.map(({_id})=>({type:'Todo' as const, id:_id})),'Todo']:['Todo']
        }),
        getTodoByID: build.query<Todo, string>({
            query: (id: string) => ({url: `/todos/${id}`}),
            transformResponse: (response: Todo, meta, arg) => {
                console.log("Response", response);
                return response;
            },
        }),
        // Pessimistic
        addTodo: build.mutation<Todo, Partial<Todo>>({
            // data entered
            query: (todo: Partial<Todo>) => ({
                url: `/todos`,
                method: "POST",
                body: todo
            }),
            // for query start
            async onQueryStarted(todo: Todo, {dispatch, queryFulfilled}) {
                console.log('onQueryStarted Todo....', todo);
                try {
                    const {data: savedTodo} = await queryFulfilled
                    console.log('Saved savedTodo ', savedTodo);
                    const patchResult = dispatch(
                        todoApiSlice.util.updateQueryData('getAllTodo'
                            , undefined,
                            (draft) => {
                                console.log('Draft ', draft);
                                draft.push(savedTodo);
                                return draft;
                            }),
                    );
                } catch {
                    //patchResult.undo();
                }
            }

            //    for other usage
            //     invalidatesTags:["Todo"]
        }),
        //updateTodo
        updateTodo: build.mutation<Todo, Todo>({
            query: (todo: Todo) => ({
                url: `/todos/${todo._id}`,
                method: 'PUT',
                body:todo
            }),
            invalidatesTags:(result,error,arg)=>[{type:'Todo',id:arg._id}],
            // invalidatesTags: ["Todo"]
        }),
        //optimistic
        deleteTodo: build.mutation<Todo, string>({
            query: (id: string) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(todoId: string, {dispatch, queryFulfilled}) {
                console.log('onQueryStarted Delete Todo....', todoId);
                const patchResult = dispatch(
                    todoApiSlice.util.updateQueryData('getAllTodo'
                        , undefined,
                        (draft) => {
                            console.log('Draft ', draft);
                            draft = draft.filter(storeTodo => storeTodo._id !== todoId);
                            return draft;
                        }),
                );

                console.log('Patch done');
                try {
                    const {data: deletedTodo} = await queryFulfilled
                    console.log('Saved Updated DeletedTodo ', deletedTodo);
                    // const patchResult = dispatch(
                    //     todoApiSlice.util.updateQueryData('getAllTodo'
                    //         , undefined,
                    //         (draft) => {
                    //             console.log('Draft ',draft);
                    //             //my bad
                    //             draft=draft.filter(todo => todo._id !== deletedTodo._id);
                    //             return draft;
                    //         }),
                    // );
                } catch {
                    patchResult.undo();
                }
            }
        })
    }),
});

// naming - use+endpoints name
export const {useGetAllTodoQuery, useGetTodoByIDQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation} = todoApiSlice;