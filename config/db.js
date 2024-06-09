import mongoose from "mongoose";
import dotenv from "dotenv"

export default function connectDB(){
    dotenv.config();
    //console.log(process.env.MONGODB_URI);
    //const url = "mongodb://127.0.0.1/incidents";
    const url = process.env.MONGODB_URI;
    //console.log(url);
    try {
        mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    }
    catch (err){
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}