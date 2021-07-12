import React from "react"

import data from "./data.json"

import Card from "./Components/Card"

class App extends React.Component{
    constructor(props){
        super(props)

        this.state={
            message:""
        }
    }

    handleChange=(event)=>{
        this.setState({
            message:event.target.value
        })
    }


 render(){
     return (
         <>
         
         <input 
         value={this.state.message}
         onChange={this.handleChange}
         type="text"
         placeholder="Type Something"
         />
         
         <div>
             {data.map(elem=> <Card data={elem} message={this.state.message}/>)}
         </div>
         </>
     )
 }



    
}

export default App