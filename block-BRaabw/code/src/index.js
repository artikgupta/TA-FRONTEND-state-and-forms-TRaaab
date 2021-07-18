import React from "react";
import { render } from "react-dom";

import Header from "./Components/Header"

import Sizes from "./Components/Sizes"

import Gallery from "./Components/Gallery";

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
        sizes:[]
    }
}

handleSize=(size)=>{
 this.setState({
sizes:this.state.sizes.includes(size)? this.state.sizes.filter((e)=>e!= size):[...this.state.sizes,size]
})
}

  render(){
  return <>
  <Header/>
  <Sizes handleSize={this.handleSize}/>
  <Gallery sizes={this.state.sizes}/>
  </>
  }
}

render(<App />, document.getElementById("root"));
