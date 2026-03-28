import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://beyoung-frontend.vercel.app",
];
// *deployement
// const allowedOrigins = [process.env.FRONTEND_URL];

app.use(
  cors({
    origin: function (origin, callback) { 
      // Allow request if:
      // origin is undefined (like Postman, mobile apps)
      // OR it's in whitelist (allowed origin)

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    // Allows:
      // cookies
      // authentication headers
      // sessions
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// both in order to turn req data into an accessible format

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});