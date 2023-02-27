import { useEffect } from "react"
import { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/products/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from '@components/common';

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
    <ul className="bg-[#fff]">
      {JSON.stringify(products)}
    </ul>
  )
}

Home.Layout = Layout