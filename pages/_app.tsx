
import { AppProps } from "next/app"
import { Layout } from "@components/common"

function MyApp ({Component, pageProps}:AppProps) {

    const Layout = Component.Layout
    return (
        <>

        <Component {...pageProps}/>


       </>
    )

}

export default MyApp