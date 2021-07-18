import React from "react"

function Sizes({ handleSize}) {

    return (
        <>

            <h3>Sizes</h3>
            <span>Order By</span>
            <select >
                <option value="Select">Select</option>
                <option value="">Highest To Lowest</option>
                <option value="">Lowest To Highest</option>
            </select>

            <ul>
                <button onClick={() => handleSize("XS")}>XS</button>
                <button onClick={() => handleSize("S")}>S</button>
                <button onClick={() => handleSize("M")}>M</button>
                <button onClick={() => handleSize("ML")}>ML</button>
                <button onClick={() => handleSize("L")}>L</button>
                <button onClick={() => handleSize("XL")}>XL</button>
                <button onClick={() => handleSize("XXL")}>XXL</button>
            </ul>

        </>
    )

}

export default Sizes