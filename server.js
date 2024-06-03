const express=require('express')
const app=express();
const cors = require('cors'); 
const port = 5000;
app.use(cors());
app.get('/api/data', (req,res)=> {
    console.log('server is fetching')
    res.json({message: 'This message is being fetch from server as server component is functionality of Next.js'
    })
})
app.listen(port,()=>{
    console.log('server is listening1')
})