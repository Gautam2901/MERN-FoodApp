// import mongoose from "mongoose";

// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://prabhatyadav98311:Iiiaspy42@cluster0.qynf7.mongodb.net/FoodFlyer').then(()=>console.log("\nDatabase Connected Successfully..!"));
// }


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://cholkargautam097:Gautam@2901@cluster0.rpm6c.mongodb.net/FoodData", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("\nDatabase Connected Successfully..!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process with failure code
  }
};
