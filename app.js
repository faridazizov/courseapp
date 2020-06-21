const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path');

const sequelize=require('./helpers/database');

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


sequelize.sync()
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });

app.listen(3000,()=>{
    console.log('listening on port 3000');
});