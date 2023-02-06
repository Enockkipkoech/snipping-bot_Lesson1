import { streamData } from "./streaming";
import dotenv from "dotenv"

// get variables
dotenv.config() // .env


const start  =  async() => {
    /// check for variables
    if(!process.env.WSS_URI) {
        throw new Error("please provide your WSS_URI in root .env file");
    }

    await streamData(process.env.WSS_URI!);
}

start();