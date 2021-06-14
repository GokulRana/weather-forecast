const express=require("express")
const path=require("path")
const fs=require("fs")
const app=express();
const port=process.env.PORT || 800;
const fetch=require('node-fetch');


app.use('/api', express.static('api'));
app.use('/asset', express.static('asset'));
app.use('/images', express.static('images'));
app.use('/backend', express.static('backend'));

app.use('/views', express.static('views'));
app.engine('pug',require('pug').__express);
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));



app.get('/',(req,res)=>{
	res.status(200).render('index.pug')
});

app.get("/about",(req,res)=>{
	res.status(200).render('about.pug')
});

app.get("/weather",(req,res)=>{
	res.status(200).render('weather.pug')
});

app.get("*",(req,res)=>{
	res.send("404 page not found oops")
});

app.listen(port , () =>{
	console.log(`listening to port at ${port}`)
})

