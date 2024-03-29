

export interface ProductImage {
    url: string
    alt?:string
}

export interface Product {
    id: string
    name:string
    description:string
    slug:string
    images: ProductImage[]
}