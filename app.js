import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { router as addProfileRouter } from "../server/routes/addProfileRouter.js";
import { router as getProfileRouter } from "../server/routes/getProfileRouter.js";
import { router as addUnidegreeRouter } from "./routes/addSchoolRouter.js";
import { router as getUnidegreeRouter } from "../server/routes/getUnidegreeRouter.js";
import { router as yourTrainingRouter } from "../server/routes/yourTraining.js";
import { router as informationRouter } from "../server/routes/addInformationRouter.js";
import { router as addSchoolRouter } from "../server/routes/addSchoolRouter.js";
import { router as getSchoolRouter } from "../server/routes/getSchoolRouter.js";
import { router as addWorkRouter } from "../server/routes/addWorkRouter.js";
import { router as getWorkRouter } from "../server/routes/getWorkRouter.js";
import { router as addAwardRouter } from "../server/routes/addAwardRouter.js";
import { router as getAwardRouter } from "../server/routes/getAwardRouter.js";
import { router as getPortfolioRouter } from "./routes/getPortfolioRouter.js";
import { router as addPortfolioRouter } from "./routes/addPortfolioRouter.js";
import { router as moduleRouter } from "../server/routes/getModules.js";
import { router as editProfileRouter } from "../server/routes/editProfileRouter.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config();

let app = express();

const dbConnection = async () => {
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
app.use(`/yourInformation/`, informationRouter);
app.use(`/addSchool`, addSchoolRouter);
app.use(`/getSchool`, getSchoolRouter);
app.use(`/addWork`, addWorkRouter);
app.use(`/getWork`, getWorkRouter);
app.use(`/addAward`, addAwardRouter);
app.use(`/getAward`, getAwardRouter);
app.use(`/addPortfolio`, addPortfolioRouter);
app.use(`/getPortfolio`, getPortfolioRouter);
app.use(`/getModules`, moduleRouter);
app.use(`/editProfile`, editProfileRouter);

dbConnection();

const server = app.listen(process.env.PORT, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT}`);
});

export default server;
