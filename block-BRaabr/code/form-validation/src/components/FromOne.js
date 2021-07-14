
import React from "react"

class FormOne extends React.Component{
    constructor(props){
        super(props)
        this.file = React.createRef()
        this.state={
        username:"",
        date:"",
        file:"",
        description:""
        }

    }

    changeHandler=(event)=>{

        this.setState({
         [event.target.name]: event.target.value
        })

        alert('A name was submitted: ' + this.file.current.value);
         event.preventDefault();

    }

    render(){
        return(
            <form >
            <input type="text"  value={this.state.username} onChange={this.changeHandler} name="username"/>
            <input type="date"  value={this.state.date} onChange={this.changeHandler} name="date"/>
            <input type="file"  onChange={this.changeHandler} name="file" ref={this.file} />
            <input type="text"  value="This can only be copied" readOnly  />
            <input type="text"  disabled="true" />
            <textarea>{this.state.description}</textarea>
            <textarea disabled="true"></textarea>
            </form>
        
        )
    }
}

export default FormOne