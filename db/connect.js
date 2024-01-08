const mongoose= require("mongoose");

uri= "mongodb+srv://adityashekhawat425:Aditya1906425@adityaapi.4wrgzwy.mongodb.net/AdityaAPI?retryWrites=true&w=majority"

const connectDB= () => {
    return mongoose.connect(uri);
};

module.exports= connectDB;
