import React from "react"
import data from "./data.json"
import "./style.css"

class App extends React.Component{
    constructor(props){
        super(props)


        this.state={
        active:false
        }
    }

   

    handleModal=()=>{
        this.setState({
            active:true
        })

    }

   


render(){
    return(
        <>
       < div className="box">
       {
             data.map((movie)=>{
                console.log(movie)
               return <>
               <div className="card">
               <h1>{movie.Title}</h1>
               <img src ={movie.Images} width="200px"/>
               <p>{movie.Released}</p>
               <button className="btn" onClick={this.handleModal}>Read More</button>
               </div>
               </>
            })
       }
       </div>

      {function Modal(params) {

       <div className="modal">
     {     
    data.map((ele)=>{
        return <>

        <h2>{ele.Title}</h2>
        <p>{ele.Type}</p>
        <p>{ele.Writer}</p>
        <p>{ele.Year}</p>
        <p>{ele.imdbID}</p>
        <p>{ele.imdbRating}</p>
        <p>{ele.imdbVotes}</p>
        <p>{ele.totalSeasons}</p>
        
        
        </>
    })
}

</div>
           
       }
    }

     
           {
               this.state.active ? <Modal/> : ""
           }
       </>
    )
}

}

export default App