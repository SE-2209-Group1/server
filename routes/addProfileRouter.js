import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import Profiles from "../models/profile.model.js";
export const router = express.Router();

router
	.route(`/`)
	.post(
		[
			check("profileid").exists().isNumeric(),
			check("name").exists().trim().escape(),
			check("personalemail").exists().trim().escape(),
			check("workemail").exists().trim().escape(),
			check("githublink").exists().trim().escape(),
			check("linkedinlink").exists().trim().escape(),
			check("phoneno").exists().trim().isNumeric(),
			check("gender").exists().trim().escape(),
			check("nationality").exists().trim().escape(),
			check("personality").exists().trim().escape(),
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
