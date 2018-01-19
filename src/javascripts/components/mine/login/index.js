
import React from 'react'

import Header from '../../header'

import Form from '../../common/form'
import FormInputItem from '../../common/form/FormInputItem'

const LeftBtn = (props)=>(
		<a className="left big"><i className="fa fa-angle-left"></i></a>
)

const RightBtn = (props)=>(
		<a className="right text">注册</a>
)

class Login extends React.Component {
	constructor(props){
		super(props)
		
		this.loginHandler = this.loginHandler.bind(this)
	}
	
	loginHandler(){
		alert('登陆啦')
	}
	
	render(){
		return (
			
			<div>
				<Header 
					left={<LeftBtn/>}
					right={<RightBtn/>}
					text={"登陆"}
				/>
				
				<Form handler={this.loginHandler}>
					<FormInputItem label={"用户名"}/>					
					<FormInputItem label={"密码"} type={"password"}/>					
				
				</Form>
				
			</div>
			
		)
	}
	
}

export default Login
