var React = require('react')
var PropTypes = React.PropTypes
var Box = require('./Box')

var styles = {
   overflow: {
      overflow: 'auto'
   },
   tag: {
      margin: '5px',
      padding: '0px'
   },
   space: {
      margin: '0px',
      display: 'inline-block',
      float: 'left',
      clear: 'left'
   }
}

function Tag(props) {
   return (
      <div style={styles.overflow}>
         <div style={styles.tag}>
            <Box backgroundColor='rgba(246, 242, 242, 1)'>
               <p style={styles.space}>
                  <b>{props.name}</b>
               </p>
               <p style={styles.space}>{props.value}</p>
            </Box>
         </div>
      </div>
   )
}

Tag.proptypes = {
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
}

module.exports = Tag