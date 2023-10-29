import app from "./src/app.js";
import connectDatabase from "./config/db.js";

connectDatabase();

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));
