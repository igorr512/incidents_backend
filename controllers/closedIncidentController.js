import IncidentModel from "../models/incident.js";
import stringSimilarity from 'string-similarity';

const findSimilarCloseNotes = (closeNotes,listOfCloseNotes)=>{
    const similarityThreshold = 0.8;
    let mostSimilar = null;
    let highestSimilarity = 0;
    if(listOfCloseNotes.length > 0){
        listOfCloseNotes.forEach(existingListNotes => {
            const similarity = stringSimilarity.compareTwoStrings(closeNotes, existingListNotes);
            if (similarity > highestSimilarity && similarity >= similarityThreshold) {
                highestSimilarity = similarity;
                mostSimilar = existingListNotes;
            }
        });
        return mostSimilar;
    }
    else{
        return closeNotes;
    }

};
const processIncidentsFromMongoDB = async () =>{
    const incidents = await IncidentModel.find({});
    const groupedByDescription = incidents.reduce((acc,incident)=>{
        // Will group incidents in the format: id:project:message
        const incidentKey = `${incident.description.id}:${incident.description.project}:${incident.description.message}`;
        const close_notes = incident.close_notes;
        if(!acc[incidentKey]){
            acc[incidentKey] = {}
        }
        const similarNotes = findSimilarCloseNotes(close_notes,Object.keys(acc[incidentKey]));
        if(acc[incidentKey][similarNotes]){
            acc[incidentKey][similarNotes]++;
        }
        else{
            acc[incidentKey][similarNotes] = 1;
        }
        return acc;

    },{});
    const mostUsedNotesByDescription = Object.keys(groupedByDescription).map(description => {
        const noteCount = groupedByDescription[description];
        const mostUsedNote = Object.keys(noteCount).reduce((a,b)=>(noteCount[a] > noteCount[b] ? a:b));
        return {description , mostUsedNote,count:noteCount[mostUsedNote]};
    });
    return mostUsedNotesByDescription;
}
export default processIncidentsFromMongoDB;
//const a = processIncidentsFromMongoDB();
//console.log("T")

