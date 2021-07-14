import React from "react"

function Shipping({state,handleChange}) {


 

    
        return(
            <div>
      <form>
            <label>
                <input type="text" placeholder="e.g. New Delhi Vasant Vihar"  name="address" value={state.address} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" placeholder="e.g. 6578482" name="zipCode" value={state.zipCode} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" placeholder="e.g. New Delhi"  name="city" value={state.city} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" placeholder="e.g. India" name="country" value={state.country} onChange={handleChange}/>
            </label>
      </form>
            </div>
        )
    }



export default Shipping