import React from "react"

class App extends React.Component{
    constructor(){
        super()

        this.state={
            counter:0,
            step:1
        }


    }

    changeStep=(value)=>{
        this.setState({
            step:value
        })
    }
    reset=()=>{
        this.setState({
            counter:0
        })

    }

    increment=()=>{
    this.setState({
    counter:this.state.counter+this.state.step
     })
    }

    decrement=()=>{
        this.setState({
            counter:this.state.counter-this.state.step
        })
    }


    changeMax=(maxvalue)=>{
        if(this.state.counter < maxvalue) {
            this.setState({
                counter:this.state.counter+1
            })
        }
    }
    
    


    render(){

        return(
    <>
    <h1>Counter App</h1>
    <h2>Steps</h2>
    <h3>{this.state.counter}</h3>
    <div className="steps">
     <button onClick={()=>this.changeStep(5)}>5</button>
     <button onClick={()=>this.changeStep(10)}>10</button>
     <button onClick={()=>this.changeStep(15)}>15</button>
    </div>
    <div>
        <h2>Max Value</h2>
    <button onClick={()=>this.changeMax(15)}>15</button>
     <button onClick={()=>this.changeMax(100)}>100</button>
     <button onClick={()=>this.changeMax(200)}>200</button>
    </div>
    <div>
     <button onClick={this.increment}>Increment</button>
     <button onClick={this.decrement}>Decrement</button>
     <button onClick={this.reset}>Reset</button>
    </div>
    </>
        )
    }
}
// if(counter < maxvalue) {this.setState}

export default App