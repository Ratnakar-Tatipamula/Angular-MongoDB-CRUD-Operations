// const express = require('express');
// const bodyparser = require('body-parser');
// const path = require('path');

//  const api = require('./server/router/api');

 const port = 3000;

// const app = express();


// app.use(express.static(path.join(__dirname,'dist')));

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

// app.use('',api);

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'dist/index.html'));
// });


// app.listen(port,function(){
//     console.log("Server running on localhost:" + port);
// })



var express = require('express');//imp
//const bodyparser = require('body-parser');
var app = express();//imp

const path = require('path');

 //app.use(express.static(path.join(__dirname,'dist')));


const api = require('./server/router/api');//imp

// app.get('/api', function(req, res){
// //    res.send("helloworldssss....yyyyy");
//       res.sendFile('./server/router/api');
// });

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());


// app.use('/api',api);//imp
app.use('',api);//imp

app.get('*',(req,res)=>{
        //  res.sendFile(path.join(__dirname,'dist/index.html'));
        res.sendFile(path.join(__dirname, 'dist/mongo-app/index.html'));
   });
    

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});//imp

//app.listen(3000);//imp