import React from "react"

import "./style.css"

class App extends React.Component{
    constructor(props){
        super(props)
    }


    handleToggle=(idx)=>{
    this.deactivate()
    this.activate(idx)
    }

   deactivate=()=>{
    let activeEleArr = document.getElementsByClassName("active")
    if(activeEleArr.length>0){
        let activeEle = activeEleArr[0]
        activeEle.classList.remove("active")
    }

   }

   activate =(idx)=>{
    let eleArr = document.getElementsByClassName(idx)
    let ele = eleArr[0]
    ele.classList.add("active")
   }

 

    render(){
        let questions = [
            {
              Q: 'Who is it for?',
              A:
                'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
            },
            {
              Q: 'Does AltCampus help me get a job?',
              A:
                'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
            },
            {
              Q: 'How does the entire process work?',
              A: 'You can read about it here - How it works.',
            },
            {
              Q: 'Is this course self-paced or batched?',
              A:
                'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
            },
          ];
        return(
                
           <>
           {
               questions.map((v,i)=>{
                   return <div>
                       <button  onClick={()=>this.handleToggle(i)}>{v.Q}</button>
                       <p className={`answer ${i}`}>{v.A}</p>
                   </div>

               })
           }
           </>     
            
        )
    }

}

export default App