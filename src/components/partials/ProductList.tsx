"use client"
import ProductCard from "@/components/partials/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@/redux/slices/productSlice";
import { useEffect } from "react";


function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.data)
    useEffect(() => {
        dispatch(fetchProduct())
    },[])
    console.log(products)
    return (
        <div className="font-sans grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-items-center mt-8">
            
            {
                products.map((product) => (

                <ProductCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} description={product.description} />

                ))
            }
        </div>
    )
}

export default ProductList
