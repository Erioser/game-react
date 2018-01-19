


import React from 'react'
import {Toast} from 'antd-mobile'
const FormBtn = (props)=>(
	
	<div className="btnBox">
		<button type="submit" className={`btn huge ${props.isDisabled?'disabled':''}`}>{props.text}</button>
	</div>
)

class Form extends React.Component {
	
	constructor(props){
		super(props)
		this.handler = this.handler.bind(this)
		
		this.state={
			isDisabled:false
		}
	}
	
	handler(e){
		e.preventDefault()	
		
		if(this.state.isDisabled){
			Toast.fail('请将表单填写完整',1)
			
			return ;
		}
		
		let data = {}
		this.elements.forEach(item=>{
			data[item.name] = item.value
		})
		
		this.props.handler(data)
	}
	
	render(){
		return (
			
			<form ref={(el)=>{this.el=el}} onSubmit={this.handler} className="form">

				{this.props.children}
				<FormBtn isDisabled={this.state.isDisabled} text={this.props.btnText||'确定'}/>
				
			</form>
			
		)
	}
	
	componentDidMount(){
		this.elements = Array.prototype.slice.call(this.el.getElementsByTagName("input"))
		let that = this
		
		let NoEmpty = that.elements.every(inp=>{
				return Boolean(inp.value)
		})		
		that.setState({isDisabled:!NoEmpty})
		this.elements.forEach(item=>{			
			item.oninput = function(e){
				
				let NoEmpty = that.elements.every(inp=>{
					return Boolean(inp.value)
				})
				
				that.setState({isDisabled:!NoEmpty})
				
			}		
		})
	
	}
	
}

export default Form
