var React = require('react')
var PropTypes = React.PropTypes
var Row = require('../Row')

function ViewFilter(props) {
   return (
      <Row>
         <input type='text' className='form-control' placeholder='Item Title' onChange={props.onUpdateTitle} value={props.title}/>
         <input type='text' className='form-control' placeholder='Tag Name' onChange={props.onUpdateName} value={props.name}/>
         <input type='text' className='form-control' placeholder='Tag value' onChange={props.onUpdateValue} value={props.value}/>
      </Row>
   )
}

ViewFilter.proptypes = {
   onUpdateTitle: PropTypes.func.isRequired,
   onUpdateName: PropTypes.func.isRequired,
   onUpdateValue: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
}

module.exports = ViewFilter