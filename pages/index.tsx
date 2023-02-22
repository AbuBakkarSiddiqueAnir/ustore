import { useEffect } from "react"
import { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/products/get-all-products"

export async function getStaticProps(){
  const products = await getAllProducts()

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
