const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/user', (req, res) => {
    res.send({ name : "test" })
})

let corsOptions = {
  origin: "*", 
  credential: true, 
};

app.use(cors(corsOptions));
app.listen(port, () => console.log(`Listening on port ${port}`))
