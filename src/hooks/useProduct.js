import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ocean-99245.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])
    return [products,setProducts];
};

export default useProduct;