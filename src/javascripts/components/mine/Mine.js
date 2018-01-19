
import React from 'react'

import Footer from '../footer'

import {hashHistory} from 'react-router'

class Mine extends React.Component {
	
	componentDidMount(){
		//判断有没有登陆....
		
		hashHistory.push('/mine/login')
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

export default Mine
