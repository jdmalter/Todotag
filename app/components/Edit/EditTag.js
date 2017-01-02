var React = require('react')
var PropTypes = React.PropTypes
var Box = require('../Box')

var styles = {
   tag: {
      margin: '5px',
      padding: '0px'
   },
   inputGroup: {
      minWidth: '100px'
   }
}

function EditTag(props) {
   return (
      <div style={styles.tag}>
         <Box backgroundColor='rgba(246, 242, 242, 1)'>
            <div className='input-group-lg' style={styles.inputGroup}>
               <input type='text' className='form-control' placeholder='Name' onChange={props.onUpdateName} value={props.name}/>
               <input type='text' className='form-control' placeholder='Value' onChange={props.onUpdateValue} value={props.value}/>
            </div>
         </Box>
      </div>
   )
}

EditTag.proptypes = {
   onUpdateName: PropTypes.func.isRequired,
   onUpdateValue: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
}

module.exports = EditTag