import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
DBConnection();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


app.get('/', (req,res) => {
    res.send("Hello World!");
});

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
});



