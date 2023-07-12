export enum ProductsCategories {
  all = "all",
  mens = "men's clothing",
  womens = "women's clothing",
  jewelery = "jewelery",
  electronics = "electronics",
}

export type ProductCategoriesKeys = keyof typeof ProductsCategories;
