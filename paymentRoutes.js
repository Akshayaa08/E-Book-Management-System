import express from "express";

const router = express.Router();

// Simulate Payment
router.post("/pay", (req, res) => {
  res.json({ message: "Payment Successful", redirectTo: "/home" });
});

export default router;
