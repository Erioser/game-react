


import React from 'react'



class Form extends React.Component {
	
	constructor(props){
		super(props)
		this.handler = this.handler.bind(this)
	}
	
	handler(e){
		e.preventDefault()
		this.props.handler()
	}
	
	render(){
		return (
			
			<form onSubmit={this.handler} className="form">
				
				{this.props.children}
				<button>tijiao</button>
			</form>
			
		)
	}
	
}

export default Form
