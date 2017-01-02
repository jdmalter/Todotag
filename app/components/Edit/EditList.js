var React = require('react')
var PropTypes = React.PropTypes
var SubmitItemContainer = require('./SubmitItemContainer')
var List = require('immutable').List

var styles = {
   row: {
      margin: '0px 0px'
   }
}

function EditList(props) {
   return (
      <div style={styles.row}>
         {props.items}
         <SubmitItemContainer handleSubmitItem={props.handleSubmitItem}/>
      </div>
   )
}

EditList.proptypes = {
   items: PropTypes.instanceOf(List).isRequired,
   handleSubmitItem: PropTypes.func.isRequired
}

module.exports = EditList