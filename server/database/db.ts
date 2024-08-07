import mongoose from "mongoose";
import env from "dotenv";

env.config();

const username = process.env.MONGO_USERNAME;
const pass = process.env.MONGO_PASSWORD;

const MONGO_URL = `mongodb+srv://${username}:${pass}@todo.uhmep5x.mongodb.net/?retryWrites=true&w=majority&appName=Todo`;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

db.on("error", () => {
  console.log("error connecting to data base");
});

export default db;
