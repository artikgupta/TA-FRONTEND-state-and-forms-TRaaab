import react from "react"


class FormTwo extends react.Component{
constructor(){
    super()

    this.state={
     username:"",
     email:"",
     password:"",
     confirmPassword:"",
     error:{
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
     }
    }
}

    handleSumbit=(event)=>{
      event.preventDefault()
      if(!this.validateEmail(this.state.email)|| this.state.username.length<3 || this.state.password.length<6 || this.state.password != this.state.confirmPassword ){

          this.setState({
              error:{
               email:"Email not valid",
               username:"Username should not be less than 3 characters",
               password:"Password should not be less than 6 characters",
               confirmPassword:"Password did not match"
                

              }
          })
      }else{
          alert("form submitted")
      }
     
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
       })
    }

   validateEmail=(email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render(){
        return(
            <>
            <h2>Register with Us</h2>
            <form onSubmit={this.handleSumbit}>
                <input type="text"  name="username" value={this.state.username} onChange={this.handleChange} />
                <span>{this.state.error.username}</span>
                
                <input type="text"  name="email" value={this.state.email} onChange={this.handleChange} />

                <span>{this.state.error.email}</span>

                <input type="password" name="password" value={this.state.password}  onChange={this.handleChange} />

                <span>{this.state.error.password}</span>

                <input type="password" name="confirmPassword"  onChange={this.handleChange}    />

                <span>{this.state.error.confirmPassword}</span>

                <button>Submit</button>
            </form>
            
            </>
        )
    
    }
    

    
}

export default FormTwo