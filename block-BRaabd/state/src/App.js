

import React from "react"


class App extends React.Component {
    constructor() {

        super()
        this.state = {
            imgSrc: "/assets/basketball.jpg"
        }
    }




    render() {
        return (
            <>

                {
                    [{ name: "basketball", img: 'basketball.jpg' }, { name: 'cricket', img: "cricket.jpg" }, { name: 'laptop', img: "laptop.jpg" }, { name: "phone", img: 'phone.jpg' }, { name: "pubg", img: 'pubg.jpeg' }, { name: "tiger", img: "tiger.jpg" }].map(elem => {
                        return <button onClick={() => this.setState({
                            imgSrc: `/assets/${elem.img}`
                        })}>{elem.name}</button>
                    })
                }
                <img src={this.state.imgSrc} />
                {/* <button onClick={}></button>
            <button onClick={}></button>
            <button onClick={}></button>
            <button onClick={}></button>
            <button onClick={}></button> */}

            </>
        )
    }
}

export default App