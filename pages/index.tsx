import { useEffect } from "react"
import { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/products/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from '@components/common';
import { ProductCart } from "@components/common/product";

export async function getStaticProps() {
  const config = getConfig()

  const products = await getAllProducts(config)


  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <ul >
      {
        products.map((product)=>{
          return (
            <li>
                 <ProductCart product={product}/>
              </li>

          )
        })
      }
    </ul>
  )
}

Home.Layout = Layout