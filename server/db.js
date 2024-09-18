import mongoose from "mongoose";

export default async function conectadoDB(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.8mgmr.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}