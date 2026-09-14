const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a) + parseInt(b);
    console.log(sum)
    res.status(200).json({
        "result":sum
    })

})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
});
