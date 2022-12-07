import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { router as addProfileRouter } from "../server/routes/addProfileRouter.js";
import { router as getProfileRouter } from "../server/routes/getProfileRouter.js";
import { router as addUnidegreeRouter } from "../server/routes/addUnidegreeRouter.js";
import { router as getUnidegreeRouter } from "../server/routes/getUnidegreeRouter.js";
import { router as yourTrainingRouter } from "../server/routes/yourTraining.js";
import { router as informationRouter } from "../server/routes/addInformationRouter.js";

// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config();

let app = express();

const dbConnection = async () => {
  console.log(`Connecting to database at: ${process.env.DATABASE}`);
  try {
    await mongoose.connect(`${process.env.DATABASE}`);
    console.log(`Connected to the database at: ${process.env.DATABASE}`);
  } catch (e) {
    console.log(`Database failed to connect: ${e.message}`);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(`/addprofiles`, addProfileRouter);
app.use(`/getprofiles`, getProfileRouter);
app.use(`/addunidegree`, addUnidegreeRouter);
app.use(`/getunidegree`, getUnidegreeRouter);
app.use(`/yourTraining`, yourTrainingRouter);
app.use(`/yourInformation`, informationRouter);

dbConnection();

const server = app.listen(process.env.PORT, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT}`);
});
export default server;
