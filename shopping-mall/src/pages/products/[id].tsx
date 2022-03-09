import { useQuery } from "react-query"
import { QueryKeys, fetcher } from '../../queryClient'
import type { Product } from '../../types'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/Product/detail'

const ProductDetailPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useQuery<Product>([QueryKeys.PRODUCTS, id], () => fetcher({
        method: 'GET',
        path: `/products/${id}`,
    }))

    if (!data) return null

    return (
        <ProductDetail item={data} />
    )
}

export default ProductDetailPage