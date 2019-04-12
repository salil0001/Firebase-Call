import React, { Component } from 'react'

//Decaling Context
export const MyContext = React.createContext();

export default class Store extends Component {
  state = {
    Projects: [
      { id: 1, title: "Help me Find Peach", content: "bla bla bla " },
      { id: 2, title: "Collect all the stars", content: "bale bale bale" },
      { id: 3, title: "Egg hunt Yoshi", content: "shava shava shava " },
    ]
    ,
    UsersDetails: [

    ]
  }
  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
