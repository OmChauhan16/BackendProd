import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT:${process.env.PORT}`);
            // console.log(app._router);

        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err);

    })

/*
(async () => {
    try {
        await mongoose.connect(`${proccess.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        });
    }
    catch (error) {
        console.error("ERROR", error);
        throw err
    }
})()
*/