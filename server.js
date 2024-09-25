import { name } from "ejs";
import express from "express";
import bodyParser from "body-parser";




const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')




app.get("/", (req,res) =>{
    res.render('app')
});



 app.get("/buy" ,(req,res) =>{
    res.render('buy')
 });


app.get("/order",(req,res) =>{
    res.render('order')
}) 


app.listen(PORT , () =>{
    console.log(`server is runing on ${PORT}`)
});