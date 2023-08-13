import React from 'react';
import {
    useGetProductsQuery,
    useDeleteProductMutation,
} from '../../app/services/api';
import './style.css'

export default function Products(props) {

  const {
    data: products = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div>
      <ul>
        {products.map((ele) => (
          <div key={ele.id} className='list-item'>
            {ele.title}
            <div className='cta-buttons'>
                <button onClick={() => deleteProduct(ele.id)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
