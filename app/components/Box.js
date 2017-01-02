var React = require('react')
var PropTypes = React.PropTypes

function Box(props) {
   var styles = {
      box: {
         backgroundColor: props.backgroundColor,
         border: 'solid',
         borderColor: 'rgba(204, 204, 204, 1)',
         borderWidth: '1px',
         borderRadius: '5px',
         boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
         boxSizing: 'border-box',
         padding: '5px',
         textAlign: 'left',
         whiteSpace: 'nowrap',
         overflow: 'auto'
      }
   }
   return (
      <div style={styles.box}>
         {props.children}
      </div>
   )
}

Box.proptypes = {
   backgroundColor: PropTypes.string.isRequired
}

module.exports = Box