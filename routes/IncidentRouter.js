import express from "express";
import openIncidentController from "../controllers/openIncidentController.js";
import mostRepeatedIncidentsController from "../controllers/mostRepeatedIncidentsController.js";

const router = express.Router()
const IncidentRoutes = (cache) =>{
    // router.get('/processOpenIncidents',(req,res)=>{
    //     const incidents = openIncidentController(cache);
    //     res.json(incidents);
    // });
    router.use((req,res,next) => {
        req.cache = cache;
        next();
    });
    router.get('/processOpenIncidents',openIncidentController);
    router.get('/getMostRepeated',mostRepeatedIncidentsController);
    return router;
}
export default IncidentRoutes;