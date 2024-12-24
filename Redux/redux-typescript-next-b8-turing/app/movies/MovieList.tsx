"use client"
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApi";

export default function MovieList() {
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery();
    console.log(data)
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isSuccess) {

        return(<div>
           <code> Movie List</code>

            {
                data.map((movie) => <div key={movie._id}>{movie.title}</div>)
            }
            <div>Movie Count :{data.length}</div>
        </div>)
    }

}