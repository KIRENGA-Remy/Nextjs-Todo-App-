import mongoose from "mongoose";

const connect = async () => {
    try {
       await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
        console.log("Connected to database");
        
    } catch (err) {
        console.log("Failed to connect to database ",err);
        
    }
}
export default connect