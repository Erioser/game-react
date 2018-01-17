

import React,{Component} from 'react'

class Header extends Component {
	
	render(){
		let {left,right,text} = this.props
		return (
			<div className="header">
				{left||<a href="/" className="left"></a>}
				<h1 className="center">{text}</h1>
				{right||<a href="/" className="right"></a>}
			</div>
		)
		
	}
	
}

export default Header
