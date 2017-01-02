var React = require('react')
var ToDoList = require('../ToDoList')
var EditListContainer = require('./EditListContainer')

function Edit(props) {
   return (
      <ToDoList>
         <p>Double click items to edit or delete.</p>
         <EditListContainer/>
      </ToDoList>
   )
}

module.exports = Edit