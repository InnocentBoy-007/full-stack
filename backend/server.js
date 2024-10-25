import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { databaseConnection } from './database.js';
import route from './route/route.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/app", route);

const serverSetup = async() => {
    try {
        app.listen(PORT || 5000, `0.0.0.0`, ()=> {
            console.log(`Server listening at port: ${PORT}`);
        })
        await databaseConnection();
        console.log("Server setup successfully!");
    } catch (error) {
        console.log("Server setup failed: ", error);
    }
}

serverSetup();
