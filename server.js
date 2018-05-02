const express = require('express'); 
const port = process.env.PORT || 3000;

var app = express();

app.get('/sammyissilly', (req, res) => {
res.send('<h1>*****Sammy is silly*****</h1>');
//
});

app.get('/ilovelara', (req, res)=> {
    res.send('<h1>**I love Lara***Sorry about the mess xx</h1>')
})

app.listen(port, () => {
console.log('listening on port ' + port);

}

);