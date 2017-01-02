var React = require('react')
var PropTypes = React.PropTypes
var List = require('immutable').List
var SubmitItem = require('./SubmitItem')

var SubmitItemContainer = React.createClass({
   proptypes: {
      handleSubmitItem: PropTypes.func.isRequired
   },
   getInitialState() {
      return {title: '', tags: List()}
   },
   handleSubmitItem(e) {
      e.preventDefault()
      this.props.handleSubmitItem({title: this.state.title, tags: this.state.tags})
      this.handleReset()
   },
   handleUpdateTitle(e) {
      e.preventDefault()
      this.setState({title: e.target.value})
   },
   handlePushTag(e) {
      e.preventDefault()
      this.setState({
         tags: this.state.tags.push({name: '', value: '', editable: true})
      })
   },
   handleReset() {
      this.setState(this.getInitialState())
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
   handleUpdateEditable(index, e) {
      var {name, value} = this.state.tags.get(index)
      this.setState({
         tags: this.state.tags.set(index, {
            name: name,
            value: value,
            editable: e.target.checked
         })
      })
   },
   render() {
      return <SubmitItem onSubmitItem={this.handleSubmitItem} onUpdateTitle={this.handleUpdateTitle} onPushTag={this.handlePushTag} onReset={this.handleReset} onUpdateName={this.handleUpdateName} onUpdateValue={this.handleUpdateValue} onUpdateEditable={this.handleUpdateEditable} title={this.state.title} tags={this.state.tags}/>
   }
})

module.exports = SubmitItemContainer