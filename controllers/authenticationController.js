import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = Buffer.from(process.env.SECRET_KEY,"base64").toString('utf-8');


const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY);
};

const authenticate = (payload) => {
    // replace with authentication logic of SSO

    return payload.username;
};

export const checkJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1]; // Bearer token

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Invalid token
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // No token provided
    }
};

const authenticationController = (req, res) => {
    const { username, password } = req.body;
    const auth_response = authenticate({username,password})
    if (auth_response) {
        const token = generateToken({ username });
        res.json({ token,name:auth_response });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
};
export default authenticationController;
