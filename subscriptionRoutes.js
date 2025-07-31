import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Upgrade to Premium
router.post("/upgrade", async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User Not Found" });

  user.subscription = "Premium";
  await user.save();
  res.json({ message: "Subscription Upgraded to Premium" });
});

export default router;
