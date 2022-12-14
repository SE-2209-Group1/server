import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import Portfolio from "../models/portfolio.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("profileid").exists().isNumeric(),
      check("portfolioTitle").exists().trim().escape(),
      check("portfolioURL").exists().trim().escape(),
      check("portfolioYear").exists().trim().escape(),
      check("portfolioWeight").exists().trim().escape(),
      check("portfolioPriority").exists().trim().escape(),
      check("portfolioDesc").exists().trim(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        //console.log(errors);
        return res.status(422).json({
          message: `There is a Error in Portfolio Data`,
        });
      }
      const portfolioData = new Portfolio(req.body);
      try {
        const Portfolio = await portfolioData.save();
        res.status(201).json(Portfolio);
      } catch {
        res.status(400).json({
          message: `Portfolio Insertion Fails`,
        });
      }
    }
  );
