
import React from 'react'

import Footer from '../footer'

import {hashHistory} from 'react-router'

import {connect} from 'react-redux'

class Mine extends React.Component {
	
	componentDidMount(){
		//判断有没有登陆....
		console.log(this.props)
		if(this.props.User.userInfo){
			hashHistory.push('/mine/personal')
		}else{
			hashHistory.push('/mine/login')
		}
		
	}
	
	componentDidUpdate(){
		if(this.props.location.pathname=='/mine'){
			console.log('要做判断了')
			if(this.props.User.userInfo){
				hashHistory.push('/mine/personal')
			}else{
				hashHistory.push('/mine/login')
			}
		}
	}
	
	render(){
		let {pathname} = this.props.location
		return (
			
			<div className="main-box">
				
				{this.props.children}
				
				<Footer pathname={pathname}/>
			</div>
			
		)
	}
	
}

export default connect(state=>state)(Mine)
