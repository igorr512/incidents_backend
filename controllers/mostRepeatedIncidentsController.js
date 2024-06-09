import IncidentModel from "../models/incident.js";

const mostRepeatedIncidentsController = async (req, res) => {
    try {
        const incidents = await IncidentModel.find({});
        const mostRepeated = incidents.reduce((acc, incident) => {
            // Will group incidents in the format: id:project:message
            const incidentKey = `${incident.description.id}:${incident.description.project}:${incident.description.message}`;
            if (!acc[incidentKey]) {
                acc[incidentKey] = 1;
            } else {
                acc[incidentKey]++;
            }
            return acc;
        }, {});
        const arrayMostRepeated = Object.entries(mostRepeated).sort(
            (a, b) => b[1] - a[1]
        );
        res.json(arrayMostRepeated);
    } catch (error) {
        console.error(error);
        res.status(500).json({"error":error})
    }
};

export default mostRepeatedIncidentsController;
