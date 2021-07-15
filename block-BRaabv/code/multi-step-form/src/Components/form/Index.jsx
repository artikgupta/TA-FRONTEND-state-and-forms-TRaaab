import React, { Component } from 'react'

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"


export default class Index extends Component {

constructor(){
    super()
    this.state = {
     currentStep:0
    }
}

handleNext=(event)=>{
    event.preventDefault()
    if(this.state.currentStep<2){
        this.setState({
            currentStep:this.state.currentStep + 1
            })
    }
   
}

handlePrev=(event)=>{
    event.preventDefault()
    if(this.state.currentStep > 0 ){
        this.setState({
            currentStep:this.state.currentStep - 1
            })
    }
}


    render() {
        return (
            <div>
                <form>
                {this.state.currentStep== 0 ? <StepOne/>: null} 
                {this.state.currentStep== 1 ?  <StepTwo/>: null}
                {this.state.currentStep== 2 ?  <StepThree/>: null}
                <button onClick={this.handleNext}>{this.state.currentStep < 2 ? "Next" : "Submit"}</button>
                <button onClick={this.handlePrev}>{this.state.currentStep > 2 ? "" : "Prev"}</button>
                </form>
            </div>
        )
    }
}
