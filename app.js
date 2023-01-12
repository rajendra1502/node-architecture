import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express from 'express';
import { verifyToken }  from './middleware/authMiddleware.js'


const app = express();
const router = express.Router()
app.use(express.json({ limit: "50mb" }));

app.get("/welcome", verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });


export {
    app,
    router,
}

