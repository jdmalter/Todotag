var React = require('react')
var Data = require('../../util/Data')
var Item = require('../Item')
var ViewFilter = require('./ViewFilter')

var styles = {
   row: {
      marginRight: '0px',
      marginLeft: '0px'
   }
}

var ViewFilterContainer = React.createClass({
   getInitialState() {
      return {title: '', name: '', value: ''}
   },
   handleUpdateTitle(e) {
      e.preventDefault()
      this.setState({title: e.target.value})
   },
   handleUpdateName(e) {
      e.preventDefault()
      this.setState({name: e.target.value})
   },
   handleUpdateValue(e) {
      e.preventDefault()
      this.setState({value: e.target.value})
   },
   filter({title, tags}) {
      return title.indexOf(this.state.title) >= 0 && ((this.state.name === '' && this.state.value === '') || tags.some(({name, value}) => name.indexOf(this.state.name) >= 0 && value.indexOf(this.state.value) >= 0))
   }, render() {
      var key = 0
      var MapItem = ({title, tags}) => {
         return <Item title={title} tags={tags} key={key++}/>
      }
      return (
         <div className='row' style={styles.row}>
            <ViewFilter onUpdateTitle={this.handleUpdateTitle} onUpdateName={this.handleUpdateName} onUpdateValue={this.handleUpdateValue} title={this.state.title} name={this.state.name} value={this.state.value}/> {Data.get().filter(this.filter).map(MapItem)}
         </div>
      )
   }
})

module.exports = ViewFilterContainer