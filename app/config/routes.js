var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var View = require('../components/View/View')
var Edit = require('../components/Edit/Edit')

var routes = (
   <Router history={hashHistory}>
      <Route path='/' component={Main}>
         <IndexRoute component={View}/>
         <Route path='/View' component={View}/>
         <Route path='/Edit' component={Edit}/>
      </Route>
   </Router>
);

module.exports = routes;