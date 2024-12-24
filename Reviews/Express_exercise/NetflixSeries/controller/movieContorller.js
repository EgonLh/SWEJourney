let Movies = require('../model/movies');

const getAllMovies = async ()=>
{
    const movies = await Movies.find().select('-_id');
    return movies;
};
const getMovieByID = async (movieID) =>
{
    return Movies.find({"id": movieID}).select('-_id');
}
const addNewMovies = async(movies)=>{
    const newMovie = new Movies(movies);
    newMovie.save();
    return movies;
}

const updateMovies = async(movies,movieId)=>{
    let updateMovies = await Movies.findByIdAndUpdate(movieId,movies,{updated:true});
    return  updateMovies;
}

const deleteMoviesByID = async(seriesId)=>{
    let series = await Movies.findById(seriesId);
    let deletedSeries = await Movies.findByIdAndDelete(series);
    return series;
}
module.exports = {
    addNewMovies,
    getAllMovies,
    getMovieByID,
    updateMovies,
    deleteMoviesByID,
}