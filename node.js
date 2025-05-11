const mongoose = require('mongoose');
const mongoURL = `mongodb://myapp_user:${process.env.MONGO_PASSWORD}@localhost:27017/myapp_db`;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,  
});

