import mongoose from "mongoose";

//nombre de la collecion de productos
const productsCollection = "products";

//esquema de productos
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Accesorios","Alarmas","multimedia","Iluminacion"]
    },
    stock:{
        type:Number,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
});

export const productsModel = mongoose.model(productsCollection,productSchema);