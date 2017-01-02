var React = require('react')
var PropTypes = React.PropTypes
var Row = require('../Row')
var List = require('immutable').List

var styles = {
   tags: {
      display: 'flex',
      flexFlow: 'row wrap'
   },
   button: {
      margin: '0px 10px'
   }
}

function EditItem(props) {
   return (
      <Row>
         <form className='input-group-lg' onSubmit={props.onEditItem}>
            <input type='text' className='form-control' placeholder='Title' onChange={props.onUpdateTitle} value={props.title}/>
            <div style={styles.tags}>
               {props.tags}
            </div>
            <div className='btn-group col-sm-12' role='group'>
               <button className='btn btn-raised btn-info' type='button' style={styles.button} onClick={props.onPushTag}>Add Tag</button>
               <button className='btn btn-raised btn-warning' type='submit' style={styles.button}>Edit</button>
               <button className='btn btn-raised btn-danger' type='button' style={styles.button} onClick={props.onDeleteItem}>Delete</button>
            </div>
         </form>
      </Row>
   )
}

EditItem.proptypes = {
   onEditItem: PropTypes.func.isRequired,
   onPushTag: PropTypes.func.isRequired,
   onDeleteItem: PropTypes.func.isRequired,
   onUpdateTitle: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   tags: PropTypes.instanceOf(List).isRequired
}

module.exports = EditItem