import express from 'express'
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
import path from 'path'
// import exp from 'constants';
const app = express();
const port = 3000
// app.use(express.static('public'));

    app.use('/public',express.static('public'));
// var server=require('http').Server(app);
// var io=require('socket.io')(server);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'home-page- Copy.html'));
})

//if any error generates with MIME (text/file) with css file
// app.use((req,res,next)=>{
//     if(req.url.endsWith('.css')){
//         const err=new Error(`CSS file not found: ${req.url}`);
    
//     err.status=404;
//     return next(err);
//     }
//     next();
// })
app.get('/events',(req,res)=>{
    res.sendFile(path.join(__dirname,'Event.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get('/Job.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'Job.html'));
})

app.get('/services/internships',(req,res)=>{
    res.sendFile(path.join(__dirname,'internship.html'));
})

app.get('/services/connects',(req,res)=>{
    res.sendFile(path.join(__dirname,'Alumni.html'));
})


app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'registration.html'));
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// import express from 'express'
//      const app = express();
//  import path from 'path'

     // Middleware to serve static files
    //  app.use(express.static(path.join(__dirname, 'public')));

    // app.get('/',(req,res)=>{
    //     res.sendFile("Hackathon/home-page - Copy.html",{root : __dirname})
    // })

    
    //  const PORT = process.env.PORT || 3000;
    //  app.listen(PORT, () => {
    //    console.log(`Server running on port ${PORT}`);
    //  });

//     import express from 'express';
//     const app=express();
//     import path from 'path'
//     const port=3000;


//     const staticFile=path.join(__dirname,'./Hackathon');
//     app.set("view engine",'html');
//     app.set('Hackathon',staticFile);


//     app.use('/public',express.static('public'));

//     app.get('/',(req,res)=>{
//         res.render('home-page- Copy.html')
//     })

// app.listen(port,()=>{
//      console.log(`Listening to the port ${port}`);
// })
