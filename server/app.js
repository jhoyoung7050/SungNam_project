const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config'); /*.env 파일은 나의 소스 코드를 남들이 못보게 암호시킨다고보면 된다*/ 




//Import Routes
const postsRoute = require('./routes/posts');
app.use(bodyParser.json());

app.use('/posts',postsRoute);



//Routes

app.get('/',(req,res) => {
    res.send('we are on home')
})





//Connect to DB
mongoose.connect(
 process.env.DB_CONNECtion, //DB_CONNECTION은 .env파일 안에있다 
 { useNewUrlParser: true }, () => console.log('connected to DB!')
);


app.listen(3000); //포트 이름

