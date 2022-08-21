  require("dotenv").config();
  const express=require('express')
  var cors=require('cors')
  const mongoose=require('mongoose');
  const mongoURL=process.env.MONGO_URL

  const app = express()
  let PORT = process.env.PORT;
  const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
  app.use(cors())
  app.use(express.json());
  //Available Routes
  app.use('/api/auth',require('./routes/auth'))
  app.use('/api/notes',require('./routes/notes'))
    
  mongoose.connect(mongoURL,connectionParams).then(()=>{
      console.info("connected")
  }).catch((error)=>{
      console.log("Error: ",error)
  });


  app.listen(PORT || 5000, () => {
    // console.log(`Example app listening on port ${port}`)
  })