import React from "react";

import data from "./data.json";

import "./styles.css"

class App extends React.Component {
  constructor() {
    super();
    this.state={
    active:"ALL"
    }
  }


  handleCategory=(menu)=>{
  this.setState({
    active:menu
})
  }


  render() {
    let filterCategory = data.reduce((acc, cv) => {
      if (!acc.includes(cv.category)) {
        acc.push(cv.category);
      }
      return acc;
    }, []);

    let filterData = this.state.active == "ALL" ? data : data.filter((value)=>value.category == this.state.active)
    console.log(filterData)
    return (
      <div className="container">

        <div className="center">
         <button className="btn" onClick={()=>this.handleCategory("ALL")}>ALL</button>
        {filterCategory.map((v) => {
          return<>
             <button  className="btn" onClick={()=>this.handleCategory(v)}>{v}</button>
          </>
        })}
        </div>

        {

        filterData.map((ele)=>{
          return <>
          <div className="flex">
          <h1>{ele.title}</h1>
          <p>Price:{ele.price}</p>
          {/* <img src = {ele.img}/> */}
          <p>{ele.desc}</p>
          </div>
          </>
        })
        }

      </div>
    );
  }
}

export default App;
