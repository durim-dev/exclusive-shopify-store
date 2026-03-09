import { shopifyFetch } from "./client";
import { getAllProductsQuery } from "./queries/product";

export async function getAllProducts() {
  let allProducts: any[] = [];
  let hasNextPage = true;
  let after: string | null = null;

  while (hasNextPage) {
    const data = await shopifyFetch({
      query: getAllProductsQuery,
      variables: { first: 50, after },
    });

    const productsPage = data.products.edges.map((edge: any) => {
      const product = edge.node;

      product.images = product.images.nodes;

      return product;
    });

    allProducts.push(...productsPage);

    hasNextPage = data.products.pageInfo.hasNextPage;
    after = data.products.pageInfo.endCursor;
  }

  return allProducts;
}
