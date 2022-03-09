import { useQuery } from "react-query"
import { fetcher, QueryKeys } from '../../queryClient'
import type { Product } from '../../types'
import ProductItem from '../../components/Product/item'

const ProductList = () => {
    const { data, isLoading } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products'
    }))

    if (isLoading) { return null }


    return (
        <div className="products">
            <ul>
                {data?.map(product => {
                    <ProductItem {...product} key={product.id} />
                })}
            </ul>
        </div>
    )
}

export default ProductList