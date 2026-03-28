import mongoose from "mongoose";

const DataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      maxPoolSize: 100, // Pool size controls how many DB operations can happen in parallel.
    });

    console.log("🗄️ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Error while connecting to database:", error.message);
    
    // 👉 CRITICAL: throw error so server stops
    throw error;
  }
};

export default DataBaseConnection;
