const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/version', async (req, res) => {
  console.log('{"app":"news","version":"1.0"}');
  res.send('{"app":"news","version":"1.0"}')
})

app.get('/poc-liveness',(req,res)=> {
  const is_status = true;
  if(is_status){
    res.send ("Health check passed");
  }else {
    res.status(500).send('Health check did not pass');
  }
});

app.get('/poc-readiness',(req,res)=> {
  const is_status = true;
  if(is_status){
    res.send ("Readiness check passed");
  }else {
    res.status(500).send('Readiness check did not pass');
  }
});

module.exports = app;
