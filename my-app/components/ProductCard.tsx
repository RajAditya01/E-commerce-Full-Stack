import react from "react";
import Image from "next/image";

const ProductCard = ({product:any})=>{
    return(
        <div><div>
            <div className="bg-gray-100 h-fit">
                <Image className="mix-blend-multiply" src={product.title} alt={product.title} width={250} height={400} />
            </div>
            <h1 className="font-bold">{product.title}</h1>
            <p>{`${products.description.substring(0,50)}...`} </p>
            <p className="font-bold text-2xl"> {`$${product.price}`}

            </p>
        </div>
            <Image src={products.image} alt={product.title} width={250} height={400} />
        </div>
    )
}

export default ProductCard;