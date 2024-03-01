import QueryBuilder from "../../app/builder/QueryBuilder";
import { ProductSearchableFields } from "./product.constant";
import { Product } from "./product.interface";
import { product } from "./product.model";

const CreateProductToDB = async (payload: Product) => {
  const result = await product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(product.find(), query).search(
    ProductSearchableFields
  );
  console.log(productQuery)
  const result = await productQuery.modelQuery;
  return result;
};

export const ProductServices = {
  CreateProductToDB,
  getAllProductFromDB,
};
