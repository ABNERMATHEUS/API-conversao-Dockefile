const express = require('express');

const app = express();

app.get('/fahrenheit/:valor/celsius',(req,res)=>{
    const {valor} = req.params;
    const celsius = (valor-32)*5/9
    res.json({valor: celsius})
})

app.get('/celsius/:valor/fahrenheit',(req,res)=>{
    const {valor} = req.params;
    const fahrenheit = (valor* 9/5)+32;
    res.json({valor: fahrenheit});
})


app.listen(8080,()=>{
    console.log('Servidor rodando...')
});