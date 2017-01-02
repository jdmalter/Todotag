var React = require('react')
var Box = require('./Box')

var styles = {
   row: {
      margin: '0px 0px 10px',
      padding: '0px'
   }
}

function Row(props) {
   return (
      <div className='row'>
         <div className='col-sm-12'>
            <div className='col-xs-2'/>
            <div className='col-xs-8' style={styles.row}>
               <Box backgroundColor='rgba(255, 253, 253, 1)'>
                  {props.children}
               </Box>
            </div>
            <div className='col-xs-2'/>
         </div>
      </div>
   )
}

module.exports = Row