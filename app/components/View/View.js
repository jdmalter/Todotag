var React = require('react')
var ToDoList = require('../ToDoList')
var ViewFilterContainer = require('./ViewFilterContainer')

function View(props) {
   return (
      <ToDoList>
         <p>Search for items with or without tags.</p>
         <ViewFilterContainer/>
      </ToDoList>
   )
}

module.exports = View