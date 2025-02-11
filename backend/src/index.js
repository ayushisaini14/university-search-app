import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { syncDatabase } from "./models/index.js";
import universityRoutes from "./routes/universityRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", universityRoutes);

syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
