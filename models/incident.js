import mongoose from "mongoose";

const IncidentScheme = new mongoose.Schema({
    number: String,
    description: mongoose.Schema.Types.Mixed,
    close_notes: String
},{
    timestamps:true
});
const IncidentModel = mongoose.model("incident", IncidentScheme);
export default IncidentModel;