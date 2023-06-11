export type Product = {
  id: number,
  image: string,
  title: number,
  description: string,
  price: string,
  category?: string
}

export type ProductsCategories = {
  [key: string]: string
}

export type Lang = {
  [key: string]: string
}
