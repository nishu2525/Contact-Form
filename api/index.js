import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/form.route.js'

dotenv.config();
mongoose.connect(process.env.MONGOOSEURL)
.then(()=>{console.log('Database Connected Successfully')})
.catch((err)=>{
    console.log(err)
})
const app =express();
 const PORT =3000;

 app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server Running Successfully on ${PORT}`);
})

app.use('/api/auth',contactRoutes)