var React = require('react')
var PropTypes = React.PropTypes
var Row = require('../Row')
var SubmitTag = require('./SubmitTag')
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

function SubmitItem(props) {
   var index = 0
   function MapSubmitTag({name, value, editable}) {
      return (<SubmitTag onUpdateName={props.onUpdateName.bind(null, index)} onUpdateValue={props.onUpdateValue.bind(null, index)} onUpdateEditable={props.onUpdateEditable.bind(null, index)} name={name} value={value} editable={editable} key={index++}/>)
   }
   return (
      <Row>
         <form className='input-group-lg' onSubmit={props.onSubmitItem}>
            <input type='text' className='form-control' placeholder='Title' onChange={props.onUpdateTitle} value={props.title}/>
            <div style={styles.tags}>
               {props.tags.map(MapSubmitTag)}
            </div>
            <div className='btn-group col-sm-12' role='group'>
               <button className='btn btn-raised btn-info' type='button' style={styles.button} onClick={props.onPushTag}>Add Tag</button>
               <button className='btn btn-raised btn-success' type='submit' style={styles.button}>Submit</button>
               <button className='btn btn-raised btn-warning' type='button' style={styles.button} onClick={props.onReset}>Reset</button>
            </div>
         </form>
      </Row>
   )
}

SubmitItem.proptypes = {
   onSubmitItem: PropTypes.func.isRequired,
   onUpdateTitle: PropTypes.func.isRequired,
   onPushTag: PropTypes.func.isRequired,
   onReset: PropTypes.func.isRequired,
   onUpdateName: PropTypes.func.isRequired,
   onUpdateValue: PropTypes.func.isRequired,
   onUpdateEditable: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   tags: PropTypes.instanceOf(List).isRequired
}

module.exports = SubmitItem