import React from "react"

import data from "../data.json"

function Gallery ({sizes}) {


    let products = sizes.length == 0 ? data.products : data.products.filter((product)=>product.availableSizes.some((size)=>sizes.includes(size)))

        return (
            <>

                {products.map((ele) => {
                    return <div>

                        <h2>{ele.title}</h2>
                        <p><span>{ele.currencyFormat}</span>{ele.price}</p>
                        <button>ADD TO CART</button>
                    </div>
                })
                }

            </>
        )
    
}

export default Gallery