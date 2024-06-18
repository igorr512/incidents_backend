import express from "express";
import authenticationController from "../controllers/authenticationController.js";

const router = express.Router();

const AuthenticationRouter = () => {
    router.post("/getToken", authenticationController);
    //router.post("/verify",verifyToken)
    return router;
};
export default AuthenticationRouter;
