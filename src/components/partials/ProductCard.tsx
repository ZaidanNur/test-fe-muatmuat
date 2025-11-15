import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slices/productSlice"

const ProductCard = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col justify-between max-w-md mx-auto rounded-md shadow-md hover:shadow-lg p-4 h-full w-full min-h-72">
            <div className="relative flex justify-center">
                <Image
                    className="w-fit h-24"
                    src={props.imageUrl}
                    alt="Product Image"
                    width={80}
                    height={80}
                />
                {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    SALE
                </div> */}
            </div>
            <div className="flex-1 mt-2">
                <div>
                    <h3 className="text-lg font-medium mb-2 text-black">{props.title}</h3>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col justify-between">
                    <span className="font-bold text-lg text-black">${props.price}</span>
                    <div>
                        <p className="text-lg font-medium mb-2 text-black">Sisa stok : 9</p>
                    </div>
                </div>
                <div>
                    <details className="dropdown hover:bg-gray-300">
                        <summary className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-20 p-2 shadow-sm">
                            <li><a>Edit</a></li>
                            <li onClick={() => dispatch(deleteProduct(props.id))}><a>Hapus</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
