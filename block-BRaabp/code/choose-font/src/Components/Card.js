import React from "react"

function Card ({data,message}){
      return  <div>
            <p style={{fontFamily:data['font-family'], fontSize:data['styles']}}>{message}</p>
            <h3>{data.name}</h3>
        </div>


}

export default Card