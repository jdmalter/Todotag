var React = require('react')
var PropTypes = React.PropTypes
var List = require('immutable').List
var Data = require('../../util/Data')
var Item = require('../Item')
var EditItemContainer = require('./EditItemContainer')
var EditList = require('./EditList')

function DoubleClickItem(props) {
   return (
      <div onDoubleClick={props.onDoubleClick}>
         <Item title={props.title} tags={props.tags}/>
      </div>
   )
}

DoubleClickItem.proptypes = {
   onDoubleClick: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   tags: PropTypes.instanceOf(List).isRequired
}

var EditListContainer = React.createClass({
   getInitialState() {
      var key = 0
      return {
         items: List(Data.get().map(({title, tags}) => <DoubleClickItem onDoubleClick={this.handleDoubleClick.bind(this, key)} title={title} tags={tags} key={key++}/>)),
         key: key
      }
   },
   findKey(key) {
      return this.state.items.findKey(({key: itemKey}) => itemKey == key)
   },
   handleEditItem(key, {title, tags}) {
      var index = this.findKey(key)
      if (index >= 0) {
         this.setState({
            items: this.state.items.set(index, (<DoubleClickItem onDoubleClick={this.handleDoubleClick.bind(this, key)} title={title} tags={tags} key={key}/>))
         })
         Data.set(Data.get().set(index, {title, tags}))
      }
   },
   handleDeleteItem(key) {
      var index = this.findKey(key)
      if (index >= 0) {
         this.setState({items: this.state.items.delete(index)})
         Data.set(Data.get().delete(index))
      }
   },
   handleDoubleClick(key) {
      var index = this.findKey(key)
      if (index >= 0) {
         var {title, tags} = Data.get().get(index)
         this.setState({
            items: this.state.items.set(index, (<EditItemContainer handleEditItem={this.handleEditItem.bind(this, key)} handleDeleteItem={this.handleDeleteItem.bind(this, key)} title={title} tags={tags} key={key}/>))
         })
      }
   },
   handleSubmitItem({title, tags}) {
      this.setState({
         items: this.state.items.push(<DoubleClickItem onDoubleClick={this.handleDoubleClick.bind(this, this.state.key)} title={title} tags={tags} key={this.state.key}/>),
         key: this.state.key + 1
      })
      Data.set(Data.get().push({title, tags}))
   },
   render() {
      return <EditList items={this.state.items} handleSubmitItem={this.handleSubmitItem}/>
   }
})

module.exports = EditListContainer