import { useEffect, useState } from "react";

const useProductDetails = productId => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://nameless-ocean-99245.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    return[product,setProduct]
};

export default useProductDetails;