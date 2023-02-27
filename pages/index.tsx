import { useEffect } from "react"
import { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/products/get-all-products"
import { getConfig } from "@framework/api/config"

export async function getStaticProps(){
  const config = getConfig()

  const products = await getAllProducts(config)


  return {
    props:{
      products
    },
    revalidate: 4*60*60
  }
}


export default function Home({products} : InferGetStaticPropsType<typeof getStaticProps>) {

useEffect(()=>{
  console.log(products[0])
})
  return (
    <ul>
      {JSON.stringify(products)}
    </ul>
  )
}
