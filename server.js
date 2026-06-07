import app from './src/app';
import connectDB  from './src/config/db';

connectDB();

app.listen(3000, () => {
    console.log("server is runnning on port 3000")
})


