const express=require('express');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

const db=require('./models');

//Routers
const postRouter=require('./routes/Posts');
app.use("/posts",postRouter);

//comments Routers
const commentsRouter=require('./routes/Comments');
app.use("/comments",commentsRouter);

//Users Routers
const usersRouter=require('./routes/Users');
app.use("/auth",usersRouter);

db.sequelize.sync().then(()=>{

    app.listen(3001,()=>{
        console.log("server running successfully on port 3001 !");
    })
    
})