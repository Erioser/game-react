import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css'; 
import './stylesheets/index.scss';


import App from './javascripts/App';

import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'



import Home from './javascripts/components/home/Home'
import LeaderBoard from './javascripts/components/leaderboard/LeaderBoard'
import Mine from './javascripts/components/mine/Mine'
import Login from './javascripts/components/mine/login'
import Register from './javascripts/components/mine/register'
import Personal from './javascripts/components/mine/personal'
import GameType from './javascripts/components/game_type/GameType'


import Demo from './javascripts/Demo'

import {Provider} from 'react-redux'
import store from './redux/store'

let routes = <Provider store={store}>
<Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRedirect to="home"/>
		<Route path="home" component={Home}/>
		<Route path="leaderboard/:type" component={LeaderBoard}/>
		<Route path="gameType" component={GameType}/>
		<Route path="mine" component={Mine}>
			<Route path="login" component={Login}/>
			<Route path="register" component={Register}/>
			<Route path="personal" component={Personal}/>
		</Route>
		
		<Route path="demo" component={Demo}/>
		<Redirect from="*" to="home"/>
	</Route>
</Router>
</Provider>

ReactDOM.render(
	routes
, document.getElementById('root'));
registerServiceWorker();
