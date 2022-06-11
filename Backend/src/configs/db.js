const mongoose = require('mongoose');


const connect = () => {
   
    return  mongoose.connect("mongodb+srv://sivaji:sivaji123@cluster0.bdvw4j5.mongodb.net/?retryWrites=true&w=majority")
}
module.exports=connect;