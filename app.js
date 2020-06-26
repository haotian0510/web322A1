const express = require("express");
const exphbs =require("express-handlebars");
const meals=require("./models/meals");
const gif = require("./models/gif");


const app=express();

app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home",{
        title:"Home Page",
        data : gif.getGif(),
        data1 : meals.getTopSeller() 

    })
});

app.get("/packages",(req,res)=>{
    res.render("packages",{
        title:"Package Listings",
        data :meals.getTopSeller()
    })
});

app.get("/registration",(req,res)=>{
    res.render("registration",{
        title:"Registration Page"
    })
});

app.get("/signin",(req,res)=>{
    res.render("signin",{
        title:"Sign In Page"
    })
});

const port=3000;

app.listen(port,()=>{
    console.log(`Web is running`);
})