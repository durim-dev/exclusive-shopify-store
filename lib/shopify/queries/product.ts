export const getAllProductsQuery = `
query getAllProducts($first: Int = 20, $after: String) {
  products(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        title
        handle
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          nodes {
            url
            altText
          }
        }
      }
    }
  }
}
`;

export const getProductDetailsQuery = `
query getProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    descriptionHtml
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 5) {
      edges {
        node {
          url
          altText
        }
      }
    }
  }
}
`;
