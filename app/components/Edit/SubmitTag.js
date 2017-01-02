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
   },
   divLabel: {
      margin: '5px 0px',
      height: '28px'
   },
   label: {
      margin: '0px',
      height: '18px',
      width: '100%'
   },
   divCheckbox: {
      display: 'inline',
      margin: '0px 0px 0px 16px',
      height: '18px'
   },
   checkbox: {
      margin: '0px',
      padding: '0px',
      verticalAlign: 'middle'
   }
}

function SubmitTag(props) {
   return (
      <div style={styles.tag}>
         <Box backgroundColor='rgba(246, 242, 242, 1)'>
            <div className='input-group-lg' style={styles.inputGroup}>
               <input type='text' className='form-control' placeholder='Name' onChange={props.onUpdateName} value={props.name}/>
               <input type='text' className='form-control' placeholder='Value' onChange={props.onUpdateValue} value={props.value}/>
               <div className='form-control' style={styles.divLabel}>
                  <label style={styles.label}>
                     Editable
                     <div style={styles.divCheckbox}>
                        <input type="checkbox" className='form-check-input' style={styles.checkbox} onChange={props.onUpdateEditable} checked={props.editable}/>
                     </div>
                  </label>
               </div>
            </div>
         </Box>
      </div>
   )
}

SubmitTag.proptypes = {
   onUpdateName: PropTypes.func.isRequired,
   onUpdateValue: PropTypes.func.isRequired,
   onUpdateEditable: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   editable: PropTypes.bool.isRequired
}

module.exports = SubmitTag