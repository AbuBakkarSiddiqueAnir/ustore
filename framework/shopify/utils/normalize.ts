
import {
    ImageEdge,
    Product as ShopifyProduct
} from '../schema'

export function normalizeProductImages ({edges}: {edges:Array<ImageEdge>}){
    edges.map(({node:{originalSrc:url, ...rest}})=>{
        return {
            url:`/images/${url}`,
            rest
        }
    })
}


export function normalizeProduct (productNode: ShopifyProduct) {
    const {
        id,
        title:name,
        handle,
        vendor,
        description,
        images : imageConnection,
        ...rest
    } = productNode;

    const product = {
        id,
        name,
        vendor,
        description,
        path:`/${handle}`,
        slug:handle.replace(/^\/+|\/+$/g, ''),
        images:normalizeProductImages(imageConnection)
        ...rest
    }
    return product
}