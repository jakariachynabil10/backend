import { Product } from "./product.interface";
import { product } from "./product.model";


const CreateProductToDB = async(payload : Product) =>{
    const result = await product.create(payload)
    return result
}


export const ProductServices = {
    CreateProductToDB
}