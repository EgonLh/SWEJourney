import {todoApiSlice} from "@/lib/features/todos/todoApiSlice";
import build from "next/dist/build";

const movieApi = todoApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllMovies:build.query({
            query: () => 'movies',
        })
    }),
    overrideExisting:false,
})

export const {useGetAllMoviesQuery} = movieApi;