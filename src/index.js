import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css'; 
import './stylesheets/index.scss';


import App from './javascripts/App';

import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'



import Home from './javascripts/components/home/Home'
import LeaderBoard from './javascripts/components/leaderboard/LeaderBoard'
import Demo from './javascripts/Demo'
let routes = <Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRedirect to="home"/>
		<Route path="home" component={Home}/>
		<Route path="leaderboard/:type" component={LeaderBoard}/>
		<Route path="demo" component={Demo}/>
		<Redirect from="*" to="home"/>
	</Route>
</Router>

ReactDOM.render(
	routes
, document.getElementById('root'));
registerServiceWorker();
