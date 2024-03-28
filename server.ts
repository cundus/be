import express from "express";
import * as dotenv from "dotenv";
import router from "./src/routes";
import { redisClient } from "./src/lib/redis";
dotenv.config();

const PORT = process.env.PORT || 3000;
redisClient.on("error", (error) => console.log(error));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, async () => {
   await redisClient.connect();
   console.log(`Server is running on port ${PORT}`);
});
