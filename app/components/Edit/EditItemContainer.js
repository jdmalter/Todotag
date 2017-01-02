var React = require('react')
var PropTypes = React.PropTypes
var List = require('immutable').List
var EditItem = require('./EditItem')
var Tag = require('../Tag')
var EditTag = require('./EditTag')

var EditItemContainer = React.createClass({
   proptypes: {
      handleEditItem: PropTypes.func.isRequired,
      handleDeleteItem: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.instanceOf(List).isRequired
   },
   getInitialState() {
      return {title: this.props.title, tags: this.props.tags}
   },
   handleEditItem(e) {
      e.preventDefault()
      this.props.handleEditItem(this.state)
   },
   handlePushTag(e) {
      e.preventDefault()
      this.setState({
         tags: this.state.tags.push({name: '', value: '', editable: true})
      })
   },
   handleDeleteItem(e) {
      e.preventDefault()
      this.props.handleDeleteItem()
   },
   handleUpdateTitle(e) {
      e.preventDefault()
      this.setState({title: e.target.value})
   },
   handleUpdateName(index, e) {
      e.preventDefault()
      var {value, editable} = this.state.tags.get(index)
      this.setState({
         tags: this.state.tags.set(index, {
            name: e.target.value,
            value: value,
            editable: editable
         })
      })
   },
   handleUpdateValue(index, e) {
      e.preventDefault()
      var {name, editable} = this.state.tags.get(index)
      this.setState({
         tags: this.state.tags.set(index, {
            name: name,
            value: e.target.value,
            editable: editable
         })
      })
   },
   render() {
      var index = 0
      return <EditItem onEditItem={this.handleEditItem} onPushTag={this.handlePushTag} onDeleteItem={this.handleDeleteItem} onUpdateTitle={this.handleUpdateTitle} title={this.state.title} tags={this.state.tags.map(({name, value, editable}) => editable
         ? <EditTag onUpdateName={this.handleUpdateName.bind(this, index)} onUpdateValue={this.handleUpdateValue.bind(this, index)} name={name} value={value} key={index++}/>
         : <Tag name={name} value={value} key={index++}/>)}/>
   }
})

module.exports = EditItemContainer