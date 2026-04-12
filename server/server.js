import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import Admin from "./models/Admin.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/create-admin", async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      return res.json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    const admin = await Admin.create({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    res.json({
      message: "Admin created successfully",
      admin: {
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
