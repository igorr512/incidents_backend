import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import IncidentRouter from "./routes/IncidentRouter.js";
import AuthenticationRouter from "./routes/AuthenticationRouter.js";
import updateCache from "./tasks/updateCache.js";
import cron from "node-cron";
import dotenv from "dotenv";

// Create an Express application
const app = express();

let cache = [];

dotenv.config();

// Schedule task
cron.schedule("* * * * *", () => updateCache(cache));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

connectDB();
// updateCache(cache);
// here
app.use("/api", IncidentRouter(cache));
app.use("/auth", AuthenticationRouter());

// Define a route for the root URL (/)
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start the server on port 3000
// const port = 5000;
const port = process.env.BACKEND_PORT;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
