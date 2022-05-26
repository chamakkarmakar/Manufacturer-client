import React from 'react';
import useProduct from '../../hooks/useProduct';

const ManageProduct = () => {
    const [products, setProducts] = useProduct();
    // const [deletingProduct, setDeletingProduct] = useState(null);

    const handleProductDelete = id => {
      
            const url = `https://nameless-ocean-99245.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.parts}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm px-5 py-3">{product.qty}</span>
                                </td>
                                <td>{product.price}</td>
                                <th>
                                    {/* <button onClick={()=>handleProductDelete(product._id)} className="btn btn-ghost btn-xs">delete</button> */}
                                    <label for="delete-confirm-modal" class="btn modal-button">delete</label>
                                    <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are you sure to delete this product?</h3>

                                            <div class="modal-action">
                                                <button onClick={()=>handleProductDelete(product._id)} class="btn btn-xs btn-error">Delete</button>
                                                <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            {/* {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>} */}
        </div>
    );
};

export default ManageProduct;