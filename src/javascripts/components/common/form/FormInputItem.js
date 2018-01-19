


import React from 'react'



class FormInputItem extends React.Component {
	
	
	
	
	render(){
		let {label,type} = this.props
		return (
			
			<div className="form-input-item">
				
				<label>{label}</label>
				
				<input type={type||"text"} />
				
			</div>
			
		)
	}
	
}

export default FormInputItem
