import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
        productName : { type : String, default : null},
        price : { type : Number, default : null},
        createdAt : { type : Date, default : null},
        updatedAt : { type : Date, default : null},
})

const Product = mongoose.model("Product", productSchema);

export default Product;
