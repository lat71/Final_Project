import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import routes from './routes/posts.js';

const app = express();

app.use('/posts', routes);

app.use(bodyParser.json({ "limit": "30mb", extended: true}));
app.use(bodyParser.urlencoded({ "limit": "30mb", extended: true}));
app.use(cors());

const CONECTION_URL = 'mongodb+srv://Admin123:abc@vue-express.zgopmut.mongodb.net/test'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONECTION_URL, { useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)