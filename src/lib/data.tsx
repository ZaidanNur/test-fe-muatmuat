import { addProduct as InputProductData } from "../redux/slices/productSlice"
export async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    console.log(products)
    return products;
}

export async function addProduct(prevData, formData) {
    const title = formData.get('title');
    const price = formData.get('price');
    const stock = formData.get('stock');

    if (!title) {
        return {
        errors: {
            title: 'Product name is required',
        },
        };
    } else if (!price) {
        return {
        errors: {
            price: 'Product price is required',
        },
        };
    }else if (!stock) {
        return {
        errors: {
            stock: 'Product stock is required',
        },
        };
    }

    

    // insert data to db
    InputProductData({
        title: title,
        price: price,
        stock: stock
    })

    return { message: 'Product added successfully' };
}