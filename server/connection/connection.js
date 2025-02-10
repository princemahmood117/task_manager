const mongoose = require("mongoose");

const connection = async () => {

  try {
    const response = await mongoose.connect(`${process.env.MONGO_URI}`);
    
    if (response) {
      console.log("database connected");  // this will show the message when data base will be connected sucessfully
    }
  } 
  catch (error) {
    console.log(error);
  }
};

connection()
