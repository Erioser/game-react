

import React,{Component} from 'react'

class Header extends Component {
	constructor(props){
		super(props)
		
	}
	
	render(){
		let {left,right,text} = this.props
		return (
			<div className="header">
				{left||<a className="left"></a>}
				<h1 className="center">{text}</h1>
				{right||<a className="right"></a>}
			</div>
		)
		
	}
	
}

export default Header
