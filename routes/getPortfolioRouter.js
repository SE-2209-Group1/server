import express from "express";
import Portfolio from "../models/portfolio.model.js";
export const router = express.Router();

router.route(`/:profileid`).get((req, res) => {
  const profileid = req.params.profileid;
  Portfolio.find({ profileid }, (error, PortfolioData) => {
    error
      ? res
          .status(404)
          .json({ message: `Portfolio collection not found in DB` })
      : res.status(200).json(PortfolioData);
  });
});
