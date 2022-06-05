const express = require('express'); //Line 1
const app = express();

const path = require('path');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('build'));
    app.get('*', (req, res) =>{
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('server running on port: ', port)
})