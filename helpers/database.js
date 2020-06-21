const Sequelize=require('sequelize');
const sequelize=new Sequelize('firstapp','root','mansimll12',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;