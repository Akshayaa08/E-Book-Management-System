import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";  
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
    console.log("📩 Registration request received:", req.body);  

    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({ username, email, password: hashedPassword });
        await user.save();

        console.log("✅ User registered:", user.email);
        res.status(201).json({ message: "Registration successful" });

    } catch (error) {
        console.error("🚨 Error in registration:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// User Login
router.post("/login", async (req, res) => {
    console.log("📩 Login request received:", req.body);  

    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ User not found");
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("❌ Incorrect password");
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("✅ User logged in:", user.email);
        res.status(200).json({ message: "Login successful", token, user });

    } catch (error) {
        console.error("🚨 Error in login:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
