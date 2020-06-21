const Sequelize=require('sequelize');
const sequelize=require('../helpers/database');

const Course= sequelize.define('course',{
    id:{
        type:Sequelize.INTEGER,
        allowIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false    
    }
   
});

module.exports=Course;