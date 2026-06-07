import'dotenv/config';
import app from './src/app';
import connectDB  from './src/config/db';

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})


