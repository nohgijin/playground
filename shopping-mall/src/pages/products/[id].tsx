import { useQuery } from "react-query";
import { QueryKeys, restFetcher } from "../../queryClient";
import type { Product } from "../../graphql/products";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/Product/detail";
import { graphqlFetcher } from "../../queryClient";
import GET_PRODUCT from "../../graphql/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return <ProductDetail item={data} />;
};

export default ProductDetailPage;
