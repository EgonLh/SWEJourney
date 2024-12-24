const mongoose = require('mongoose');
let Reviews = require('../model/Review');
let Movies = require('../model/Movies');

const getAllReview = async ()=>{
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{
    return Reviews.findById(reviewId).populate("movie");
}
const getReviewByMovieId = async(movieId)=>{
    return Reviews.find({movie:movieId}).populate("movie");
}
const saveReview = async(review)=>{
    console.log("Save_Review_lg" ,review)
        const newReview = new Reviews({
            movie: new mongoose.Types.ObjectId(review.movie),
            rating: review.rating,
            review: review.review,
        });


    console.log(newReview)
    await newReview.save();
    //return newReview;
    return newReview.populate('movie');
}
const updateReview = async(reviewId,review)=>{
    review.movie = new mongoose.Types.ObjectId(review.movie);
    //console.log('Review Id ',reviewId, ' Review ',review);
    const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review,{new: true});
    return updatedReview.populate("movie");
}
const deleteReview= async(reviewId)=>{
    const deletedReview = await Reviews.findByIdAndDelete(reviewId);
    return deletedReview;
}
module.exports = {
    getAllReview,
    getReviewById,
    saveReview,
    getReviewByMovieId,
    updateReview,
    deleteReview,

}