const express = require('express');
const app = express();
const cors = require('cors');
let port = 8000;
app.use(express.json());
app.use(cors());
const DBconnect = require('./DBconnect');
const router = require('./Routes/Route');
app.use('/Api/v1', router);
app.get('/',(req, res) => { 
    res.send("Getting the data");

})
app.listen(port,() => {
  
   console.log(`Server is running on port:${port}`)
})

DBconnect();