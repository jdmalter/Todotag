var React = require('react')
var PropTypes = React.PropTypes
var Row = require('./Row')
var Tag = require('./Tag')
var List = require('immutable').List

var styles = {
   space: {
      margin: '0px'
   },
   tags: {
      display: 'flex',
      flexFlow: 'row wrap'
   }
}

function Item(props) {
   var key = 0
   function MapTag({name, value}) {
      return <Tag name={name} value={value} key={key++}/>
   }
   return (
      <Row>
         <p style={styles.space}>{props.title}</p>
         <div style={styles.tags}>
            {props.tags.map(MapTag)}
         </div>
      </Row>
   )
}

Item.proptypes = {
   title: PropTypes.string.isRequired,
   tags: PropTypes.instanceOf(List).isRequired
}

module.exports = Item