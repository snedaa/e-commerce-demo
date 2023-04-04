import {config} from "./config"

export const endpoint = {
    products: config.BASE_API_URL + "products",
    categories: config.BASE_API_URL + "products" + "/categories",
}