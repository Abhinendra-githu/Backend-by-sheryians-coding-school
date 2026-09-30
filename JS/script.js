const express = require('express');
const app = express(); //jo server create kiya hai use store kiya hai app variable ke andar
app.get('/',(req,res) => { //get request without his hame local host pe cannot get mil rha tha
    res.send('Hello World');
});

app.get("/about",(req,res) => {
    res.send('About Page');
});
app.listen(3000,() => { // server start kiya
    console.log('Server is running on port 3000');
})