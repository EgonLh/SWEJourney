let Series = require('../model/series');

const getAllSeries = async ()=>
{
    const series = await Series.find().select('-_id');
    return series;
};
const getSeriesByName = async (seriesId) =>
{
    return Series.find({"id": seriesId}).select('-_id');
}
const addNewSeries = async(series)=>{
    const newSeries = new Series(series);
    newSeries.save();
    return series;
}

const updateSeries = async(series,seriesId)=>{
    let updateSeries = await Series.findByIdAndUpdate(seriesId,series,{updated:true});
    return  updateSeries;
}

const deleteSeriesByID = async(seriesId)=>{
    let series = await Series.findById(seriesId);
    let deletedSeries = await Series.findByIdAndDelete(series);
    return series;
}
module.exports = {
    addNewSeries,
    getAllSeries,
    getSeriesByName,
    updateSeries,
    deleteSeriesByID,
}