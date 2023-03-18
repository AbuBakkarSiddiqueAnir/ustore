
import React,{FC} from 'react';
import { Product } from '@common/types/product';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    product: Product
};

const ProductCard:FC<Props> = ({product}) => {


    return (
        <Link href={`/products/${product.slug}`}>
          <div>
            <h3>
                <span>
                    {product.name}
                </span>
            </h3>
            <span>122 $</span>
          </div>
          {
            product.images && (
                <Image
                alt={product.name ?? 'Product image'}
                src={'/images/placeholder-image.webp'}
                height={300}
                width={300}
                quality='85'
                layout='responsive'
                />
            )
          }
        </Link>

    )
}
export default ProductCard;