import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import Information from "../models/information.model.js";
export const router = express.Router();

// function badgeSchemaChecker(schema) {
//   if (typeof schema === badgeSchema) {
//     return true;
//   }
// }
// function scoreSchemaChecker(schema) {
//   if (typeof schema === scoreSchema) {
//     return true;
//   }
// }

router.route(`/:profileid`).post(
  [
    check("videoLink").exists().trim().escape(),
    // check("badge").exists(),
    // check("badgeSchema").isLength({ min: 2, max: 2 }),
    // .badgeSchemaChecker("add input"),
    // check("badgeSchema").isLength({ min: 2, max: 2 }),
    // .scoreSchemaChecker("add input"),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(422).json({
        message: `There is an Error in the information data`,
      });
    }
    const informationData = new Information(req.body);
    try {
      const information = await informationData.save();
      res.status(201).json(information);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);
