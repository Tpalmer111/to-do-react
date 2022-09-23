import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


class MyList extends Component {
  render() {
    const toDoItems = this.props.theList.map((item, i) => {
      return (
      <ListItem 
      task={item} 
      key={i} 
      />
      )
    })
    
    return ( 
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <ListItem 
            task={toDoItems}
          />
        </ul>
      </div>)
  }
}

export default MyList