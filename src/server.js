import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express Auth API" });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
