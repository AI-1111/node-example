const express = require('express'); 

var app = express();

app.get('/sammyissilly', (req, res) => {
res.send('<h1>*****Sammy is silly*****</h1>');
//
});

app.get('/ilovelara', (req, res)=> {
    res.send('<h1>**I love Lara***Sorry about the mess xx</h1>')
})

app.listen(3000);