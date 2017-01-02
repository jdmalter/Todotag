var React = require('react')

var styles = {
   transparent: {
      background: 'transparent',
      minWidth: '480px'
   },
   header: {
      fontSize: '72px'
   }
}

function ToDoList(props) {
   return (
      <div className="col-sm-12 text-center" style={styles.transparent}>
         <h1 style={styles.header}>To Do List</h1>
         {props.children}
      </div>
   )
}

module.exports = ToDoList