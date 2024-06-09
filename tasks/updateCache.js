import IncidentModel from "../models/incident.js"
import processIncidentsFromMongoDB from "../controllers/closedIncidentController.js"

const updateCache = async (cache) =>{
    let newArr = [];
    try{
        console.log("running now");
        const latestFromDB = await IncidentModel.findOne().sort({createdAt:-1}).exec();
        if(latestFromDB){
            const latestTimeStampFromDB = latestFromDB.createdAt;
            if(cache.length>0){
                const latestTimestampFromCache = cache[cache.length-1]
                if(latestTimeStampFromDB!==latestTimestampFromCache){
                    newArr = await processIncidentsFromMongoDB();
                    newArr.push(latestTimeStampFromDB);
                    cache.push(...newArr);
                }
            }
            else{
                    newArr = await processIncidentsFromMongoDB();
                    newArr.push(latestTimeStampFromDB);
                    cache.push(...newArr);
                }
        }
        else{
            console.log("DB is empty");
        }
    }
    catch(err){
        console.log("Error ",err);
    }
    // finally{
    //     console.log("Finished running with ",cache)
    // }

}
export default updateCache;