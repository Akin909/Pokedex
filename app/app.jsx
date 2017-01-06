/* @flow */
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var {Route, Router, IndexRoute, hashHistory}= require('react-router')
var Main = require ('Main')


//Load foundation
//App css
require('style!css!sass!applicationStyles');

var routes = (<Router history={hashHistory}>
  <Route path = "/" component = {Main}>

  </Route>
</Router>);

ReactDOM.render(routes,
document.getElementById( 'app' )
);
