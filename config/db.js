import mongoose from "mongoose";
import dotenv from "dotenv"

export default function connectDB(){
    dotenv.config();
    const DB_USER = Buffer.from(process.env.MONGODB_USER,"base64").toString('utf-8');
    const DB_PASSWORD = Buffer.from(process.env.MONGODB_PASSWORD,"base64").toString('utf-8');

    // const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`;
    const MONGODB_URI = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`;
    //console.log(process.env.MONGODB_URI);
    //const url = "mongodb://127.0.0.1/incidents";
    const url = MONGODB_URI;
    // const url = process.env.MONGODB_URI;
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