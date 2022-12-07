import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import Information from "../models/information.model.js";
export const router = express.Router();

function badgeSchemaChecker(schema) {
  if (typeof schema === badgeSchema) {
    return true;
  }
}
function scoreSchemaChecker(schema) {
  if (typeof schema === scoreSchema) {
    return true;
  }
}

router.route(`/:profileid`).post(
  [
    check("videoLink").exists().trim().escape(),
    check("badge").exists(),
    check("badgeSchema")
      .isLength({ min: 2, max: 2 })
      .badgeSchemaChecker("add input"),
    check("badgeSchema")
      .isLength({ min: 2, max: 2 })
      .scoreSchemaChecker("add input"),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(422).json({
        message: `There is a Error in Profile Data`,
      });
    }
    const profileData = new Profiles(req.body);
    try {
      const profiles = await profileData.save();
      res.status(201).json(profiles);
    } catch {
      res.status(400).json({
        message: `Profile Insertion Fails`,
      });
    }
  }
);
