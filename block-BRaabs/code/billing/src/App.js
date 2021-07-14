
import react from "react"
import Shipping from "./components/Shipping"
import Billing from "./components/Billing"
import style from "./style.css"

class App extends react.Component{


    constructor(){
        super()

        this.state={
            shipping:{
                address:"",
                zipCode:"",
                city:"",
                country: ""
            },
            billing:{
            address:"",
            zipCode:"",
            city:"",
            country: ""
            }
            
        }
    }

    handleShippingAddressChange=(event)=>{
        this.setState(
            {
            shipping:{...this.state.shipping,[event.target.name]:event.target.value}
            
        }
        )
    }

    handleBillingAddressChange=(event)=>{
        this.setState({
            billing:{...this.state.billing,[event.target.name]:event.target.value}
        })
    }

    handleCheckbox=()=>{
        this.setState({
            billing:this.state.shipping
        })
    }

    render(){
        return(
            <div className="flex">
                <Shipping handleChange={this.handleShippingAddressChange} state={this.state.shipping} />
                <Billing handleChange={this.handleBillingAddressChange} state={this.state.billing}  handleCheckbox={this.handleCheckbox}/>
            </div>
        )
    }

}

export default App