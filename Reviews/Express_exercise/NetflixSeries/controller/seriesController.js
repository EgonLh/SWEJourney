const seriesServices = require('../services/servicesServices');

/*--Error Handler--*/
const handle = function(func,httpErrorCode)
{
    return async function(req,res,next)
    {
        try
        {
            func(req,res,next).catch(err=> {
                return res.status(httpErrorCode).json({message: err})
            });
        }catch (err)
        {
            console.log("Error is ",err);
            await res.status(httpErrorCode).json({message: err})
        }
    }

}

const handleError = (data,res) =>{
    if(!data){
        res.status(400).json({
            error:"Please Wait....  "
        });
    }else{
        res.status(200).json(data)
    }
};

const getAllSeries = async function(req,res,next){
    let series = await  seriesServices.getAllSeries();
    handleError(series,res);
}

const findSeriesByID = async function(req,res,next){
    let seriesID = req.params['seriesID'];
    let series = await seriesServices.getSeriesByName(seriesID);
    handleError(series,res);

}

const createSeries = async function(req,res,next){
    let body = req.body;
    let series = await seriesServices.addNewSeries(body)
    res.json(series);
}

const updateSeriesById = async function(req,res,next){
    let seriesID = req.params['seriesID']
    let series = req.body;
    let updateSeries = await seriesServices.updateSeries(series,seriesID)
    res.json(updateSeries);
}

const deleteSeriesById = async function(req,res,next){
    let seriesID = req.params['seriesID']
    let deletedTodo = await seriesServices.deleteSeriesByID(seriesID);
    res.json(deletedTodo);
}


module.exports = {
    getAllSeries,
    createSeries,
    updateSeriesById,
    deleteSeriesById,
    findSeriesByID,
}